import React from 'react'
import { useSelector } from 'react-redux';
import NoteList from '../components/NoteList';
import Search from '../components/Search';
import Header from '../components/Header';
import styled from "styled-components";
import { nanoid } from 'nanoid';
import { useState } from 'react';

const Naikan = () => {
    const [notes, setNotes] = useState([]);

    const [searchText, setSearchText] = useState('');

    const [darkMode, setDarkMode] = useState(false);
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
	};

    const deleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	};




    const user = useSelector(state => state.user.user);
    console.log(user);
    return (
        <div className={`${darkMode && 'dark-mode'}`}>
        <Div>
            <Header handleToggleDarkMode={setDarkMode}/>
            <Search handleSearchNote={setSearchText}/>
           <NoteList notes={notes.filter((note)=> note.text.toLowerCase().includes(searchText))} handleAddNote={addNote} handleDeleteNote = {deleteNote} />
        </Div>
        </div>
    )
}
const Div =  styled.div`
    max-width: 960px;
	margin-right: auto;
	margin-left: auto;
	padding-right: 15px;
	padding-left: 15px;
	min-height: 100vh;
    `;
export default Naikan