import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Signin from './views/Signin';
import Signup from './views/Signup';
import Naikan from './views/Naikan';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Signin />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/naikan" element={<Naikan />} />
    </Routes>

  );
}

export default App;
