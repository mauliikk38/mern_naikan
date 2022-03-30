import React from 'react';
import styled from "styled-components";

const Header = ({ handleToggleDarkMode }) => {
	return (
		<Div>
			<h1 className= "text">Notes</h1>
			<button
				onClick={() =>
					handleToggleDarkMode(
						(previousDarkMode) => !previousDarkMode)
				}
				className='btn btn-secondary'
			>
				Toggle Mode
			</button>
		</Div>
	);
};
const Div =  styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
    

    h1{
        font-size: 2em;
        font-weight: bold;   
    }
`;

export default Header;