import React, { useState, useEffect } from 'react';
import Note from './Note';
import AddNote from './AddNote';
import styled from "styled-components";
import axios from "axios";


const NoteList = ({handleAddNote , handleDeleteNote}) => {
 
    const [notes, setNotes] = useState([]);
    
    useEffect(() => {
      axios.get('/v1/auth/naikan')
      .then((response) => {
        setNotes(response.data);
        console.log(response.data);
      })
      .catch((res) => {
        
      console.log('Error retrieving data!!!');
      });
    }, []);

    const addNewNote = (text) =>{
      setNotes([...notes,{"text":text}]);
      handleAddNote(text);
    };


    return (
        <Div>
          
            {notes.map(( note) => <Note key={note._id} id={note._id}
					text={note.text}
					date={note.date}
                    handleDeleteNote={handleDeleteNote}
                    />
                    )}
                    <AddNote handleAddNote = {addNewNote} />
        </Div>
    )
}
const Div =  styled.div`
display: grid;
grid-gap: 1.5rem;
grid-template-columns: repeat(
    auto-fill,
    minmax(250px, 1fr)
);

`;

export default NoteList