import { useState } from 'react';
import styled from "styled-components";
import {useDispatch} from "react-redux";
import { addNote} from "../state/action-creators/naikan.js";



const AddNote = ({ handleAddNote }) => {
	const [noteText, setNoteText] = useState('');
	const characterLimit = 200;
	const dispatch = useDispatch();
	const handleChange = (event) => {
		if (characterLimit - event.target.value.length >= 0) 
        {
			setNoteText(event.target.value);
		}
	};

	const handleSaveClick = () => {
		if (noteText.trim().length > 0) 
        {
			dispatch(addNote({text:noteText}));
			
			handleAddNote(noteText);

			setNoteText('');
		}
	};


	return (
		<Div>
			<textarea
				rows='4'
				cols='10'
				placeholder='Type to add a note...'
                value={noteText}
                onChange={handleChange}	
				name = "text"			
				
			></textarea>
			<Div2>
				<small>
					{characterLimit - noteText.length} Remaining
				</small>
                
				<button type="button" onClick={handleSaveClick}>
					Save
				</button>
			</Div2>
		</Div>
	);
}
const Div =  styled.div`
background-color: #67d7cc;
border-radius: 10px;
padding: 1rem;
min-height: 180px;

display: flex;
flex-direction: column;
justify-content: space-between;
white-space: pre-wrap;

textarea {
	border: none;
	resize: none;
	background-color: #67d7cc;
}

textarea:focus {
	outline: none;
}


`;
const Div2 =  styled.div`
    display: flex;
	align-items: center;
	justify-content: space-between;

    button {
        background-color: white;
        border: none;
        border-radius: 15px;
        padding: 5px 10px 5px 10px;
    }
    
    button:hover {
        background-color: grey;
        cursor: pointer;
    }
    
`;



export default AddNote;