import React from 'react';
import { MdSearch } from 'react-icons/md';
import styled from "styled-components";

const Search = ({ handleSearchNote }) => {
	return (
		<Div>
			<MdSearch className='search-icons' size='1.5em' />
			<input
				onChange={(event) =>
					handleSearchNote(event.target.value)
				}
				type='text'
				placeholder='type to search...'
			/>
		</Div>
	);
};
const Div =  styled.div`
	display: flex;
	align-items: center;
	background-color: rgb(233, 233, 233);
	border-radius: 10px;
	padding: 5px;
	margin-bottom: 1.5em;
	margin-top: 1.5em;

 input {
	border: none;
	background-color: rgb(233, 233, 233);
	width: 100%;
}

 input:focus {
	outline: none;
}
`;

export default Search;