import React from 'react';
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector} from "react-redux";
import { RESET_STATE } from '../state/types';
import {GrDocumentNotes} from 'react-icons/gr';

const Header = () => {
	const user = useSelector(state => state.user.user);
    console.log(user);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	return (
		<Div>
			<Div2>
			<GrDocumentNotes size={40}/>
			<h1 className= "text">NAIKAN, {user.displayname}</h1>
			</Div2>			
			<div>
				<button type="button" className='btn btn-danger active'  onClick={() => {
					dispatch({ type: RESET_STATE, payload: {} });
					navigate("/", { replace: true})}
					} >Logout
				</button>
				</div>
			
		</Div>
	);
};
const Div =  styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom:1.5em;
    

    h1{
        font-size: 2em;
        font-weight: bold;   
    }
	
`;
const Div2 =  styled.div`
  width: 25rem;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  color: black;
  text-decoration: none;

`;

export default Header;