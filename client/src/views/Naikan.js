import React from 'react'
import NoteList from '../Note/NoteList';
import Search from '../Note/Search';
import Header from '../Note/Header';
import styled from "styled-components";
import { nanoid } from 'nanoid';
import { useState  } from 'react';
import axios from "axios";
const Naikan = () => {
    const [notes, setNotes] = useState([]);
    // const [status, setStatus] = useState(null);
	

    const [searchText, setSearchText] = useState('');

    
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric',  minute: 'numeric',  second: 'numeric'};

    const addNote = (text) => {
		const date = new Date();
		const newNote = {
			id: nanoid(),
			text: text,
			date: date.toLocaleString('en-GB',options),
			};
		const newNotes = [...notes, newNote];
		setNotes(newNotes);
		console.log(newNote);
	};
	// useEffect(() => {
    const deleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
		const payload = {_id: id };
		axios.post('http://localhost:5000/v1/auth/naikan/delete', payload);
		console.log(payload);
		setNotes(newNotes);
		console.log(newNotes);
	};
// }, []);


// notes={notes.filter((note)=> note.text.toLowerCase().includes(searchText))}

   
    return (
        
        <Div>
            <Header />			
            <Search notes={notes.filter((note)=> note.text.toLowerCase().includes(searchText))} handleSearchNote={setSearchText}/>
           <NoteList  handleAddNote={addNote} handleDeleteNote = {deleteNote} />
        </Div>
        
    )
}
const Div =  styled.div`
    max-width: 960px;
	margin-right: auto;
	margin-left: auto;
	
	padding-right: 15px;
	padding-left: 15px;
	min-height: 100vh;
	background:whitesmoke;
    `;
export default Naikan