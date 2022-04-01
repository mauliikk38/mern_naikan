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
			<Div1>
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
		</Div1>
		<hr />
		</Div>

		
	);
};
const Div =  styled.div`
hr {
	color: black;
	overflow: visible;
	text-align: center;
	height: 2px;
	margin-top: -0.8rem;
}

`;
const Div1 =  styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	
    

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
  margin-top:1rem;
  color: black;
  text-decoration: none;

`;

export default Header;