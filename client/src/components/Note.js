import React from "react";

import { MdDeleteForever } from 'react-icons/md';

import styled from "styled-components";
// import { AiOutlinePlus } from 'react-icons/ai';

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
//     <List>
//       <Card>
// <AiOutlinePlus />
//         <button type="button">Add Naikan Today</button>         
//       </Card>
//     </List>
    
    
  )
} 
const Div =  styled.div`
background-color: #fef68a;
border-radius: 10px;
padding: 1rem;
min-height: 170px;
display: flex;
flex-direction: column;
justify-content: space-between;
white-space: pre-wrap;
`;

const Div2 =  styled.div`
  display: flex;
	align-items: center;
	justify-content: space-between;
`;
// const List =  styled.div`
//   display: flex;
//   justify-content: center;
//   margin: 2rem 0rem;
  
 
// `;

// const Card = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
  
//   margin-right: 2rem;
//   font-size: 3rem;
//   text-decoration: none;
//   background: linear-gradient(to right, red, green);
//   width: 18rem;
//   height: 4rem;
//   cursor: pointer;
//   transform: scale(0.9);

//   button{
//     color: white;
//     font-size: 1.4rem;
//   }
//   svg{
//     color: white;
//     font-size: 2rem;
//   }
  
// `;

export default Note;
