import React from 'react';
import './Naikan.css';
import { useNavigate } from "react-router-dom";
// import { User } from '../../../server/src/models';


const Naikan = () => {
    const navigate = useNavigate();
    
    // naikan(data);

    // const naikan = (data) =>{
        

    // }

    return (
        <div>
            <div className='naikan'>
                <h1>name</h1>
                <div className='button' onClick={() => navigate("/", { replace: true})} >Logout</div>                
            </div>
        
        </div>
    )
}
export default Naikan