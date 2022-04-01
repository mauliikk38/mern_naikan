import React from 'react';
import Note from './Note';
import AddNote from './AddNote';
import styled from "styled-components";


const NoteList = ({ notes , handleAddNote , handleDeleteNote}) => {
    return (
        <Div>
            {notes.map((note) => <Note id={note.id}
					text={note.text}
					date={note.date}
                    handleDeleteNote={handleDeleteNote}
                    />
                    )}
                    <AddNote handleAddNote = {handleAddNote} />
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