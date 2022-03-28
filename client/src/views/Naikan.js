import React from 'react';
import './Naikan.css';

const Naikan = ({setLoginUser}) => {
    return (
        <div>
            <div className='naikan'>
                <h1>HELLO</h1>
                <div className='button' onClick={() => setLoginUser({})} >Logout</div>
            </div>
        
        </div>
    )
}

export default Naikan