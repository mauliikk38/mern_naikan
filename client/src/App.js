import './App.css';
import { Routes, Route, Navigate} from "react-router-dom";
import Signin from './views/Signin';
import Signup from './views/Signup';
import Naikan from './views/Naikan';
import { Provider } from 'react-redux';
import store from './state/store';
import jwt_decode from "jwt-decode";
function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={localStorage.getItem('user') ?  <Navigate to="/naikan" /> : <Signin /> }   />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/naikan" element={
          <RequireAuth>
            <Naikan />
          </RequireAuth>
        } />
      </Routes>
    </Provider>

  );
}


function RequireAuth({ children }) {
  try {
    let access = localStorage.access ? jwt_decode(localStorage.access) : false;
    return access ? (access.sub.match(/^[0-9a-fA-F]{24}$/) ? (children) : (<Navigate to="/signin" replace />)) : (<Navigate to="/signin" replace />);
  } catch (error) {
    return <Navigate to="/signin" replace />;
  }

}

export default App;
