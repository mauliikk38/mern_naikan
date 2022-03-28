import './App.css';
import { Routes, Route } from "react-router-dom";
import Signin from './views/Signin';
import Signup from './views/Signup';
import Naikan from './views/Naikan';
import { useState } from 'react';
function App() {

  const [ user, setLoginUser] = useState({});
  

  return (
    <Routes> 
      <Route exact path="/" element={user && user._id ? <Naikan setLoginUser= {setLoginUser} /> : <Signin setLoginUser={setLoginUser}/>} />          
      <Route path="/signin" element={<Signin setLoginUser={setLoginUser} />} />
      <Route path="/signup" element={<Signup />} />
          <Route path="/naikan" element={<Naikan />} />
    </Routes>

  );
}

export default App;
