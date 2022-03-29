import './App.css';
import { Routes, Route } from "react-router-dom";
import Signin from './views/Signin';
import Signup from './views/Signup';
import Naikan from './views/Naikan';
import { useState } from 'react';
function App() {

  const [ user, setSigninUser] = useState({});
  

  return (
    <Routes> 
      <Route exact path="/" element={user && user._id ? <Naikan setSigninUser= {setSigninUser} /> : <Signin setSigninUser={setSigninUser}/>} />          
      <Route path="/signin" element={<Signin setSigninUser={setSigninUser} />} />
      <Route path="/signup" element={<Signup />} />
          <Route path="/naikan" element={<Naikan />} />
    </Routes>

  );
}

export default App;
