import logo from './logo.svg';
import './App.css';
import Home from './Pages/home';
import Login from './Pages/login';


import { Link, useNavigate } from 'react-router-dom';

import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <div className='contents'>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </div>
        Click the links below
        {/* <a  onClick={()=>{navigte('/home');}}  style={{fontSize: ' 1.2rem'}}>click me to home</a>
        <a onClick={()=>{navigte('login')}}  style={{fontSize: ' 1.2rem'}}>click me to login</a> */}
      <Link to='/home' >click me to home</Link>
      <Link to='/login' >click me to login</Link>


      </div>
    </HashRouter>

  );
}

export default App;
