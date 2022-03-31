import React from 'react'
import NoteList from '../Note/NoteList';
import Search from '../Note/Search';
import Header from '../Note/Header';
import styled from "styled-components";
import { nanoid } from 'nanoid';
import { useState, useEffect } from 'react';


const Naikan = () => {
    const [notes, setNotes] = useState([]);
	useEffect(() => {
		const savedNotes = JSON.parse(
			localStorage.getItem('naikan')
		);

		if (savedNotes) {
			setNotes(savedNotes);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem(
			'naikan',
			JSON.stringify(notes)
		);
	}, [notes]);

    const [searchText, setSearchText] = useState('');

    
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};

    const addNote = (text) => {
		const date = new Date();
		const newNote = {
			id: nanoid(),
			text: text,
			date: date.toLocaleDateString('en-GB', options),
		};
		const newNotes = [...notes, newNote];
		setNotes(newNotes);
		console.log(newNote);
	};

    const deleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
		console.log(newNotes);
	};




   
    return (
        
        <Div>
            <Header />
			
            <Search handleSearchNote={setSearchText}/>
           <NoteList notes={notes.filter((note)=> note.text.toLowerCase().includes(searchText))} handleAddNote={addNote} handleDeleteNote = {deleteNote} />
        </Div>
        
    )
}
const Div =  styled.div`
    max-width: 960px;
	margin-right: auto;
	margin-left: auto;
	margin-top: 2rem;
	padding-right: 15px;
	padding-left: 15px;
	min-height: 100vh;
    `;
export default Naikan