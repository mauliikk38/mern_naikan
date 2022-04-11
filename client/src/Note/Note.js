import React from "react";

import { MdDeleteForever } from 'react-icons/md';

import styled from "styled-components";


const Note = ({ id, text, date, handleDeleteNote }) => {

  return (
    <Div>
    <span>{text}</span>
    <Div2>
      <small>{date}</small>
      <MdDeleteForever
        onClick={() => handleDeleteNote(id)}
        className='delete-icon'
        size='1.5em' cursor='pointer'
      />
    </Div2>
  </Div>

  )
} 
const Div =  styled.div`
background-color: #67d7cc;
border-radius: 10px;
padding: 1rem;
min-height: 170px;
display: flex;
flex-direction: column;
justify-content: space-between;
white-space: pre-wrap;
  span{
    color:black;
  }
`;

const Div2 =  styled.div`
  display: flex;
	align-items: center;
	justify-content: space-between;
`;

export default Note;
