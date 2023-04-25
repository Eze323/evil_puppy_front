import {Routes, Route, useNavigate, useLocation} from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import FormCreate from './components/FormCreate/FormCreate';
import Detail from './components/Detail/Detail';
import LandingPage from './components/LandingPage/LandingPage';

import './App.css';
import Nav from './components/Nav/Nav.jsx';
import { useEffect, useState } from 'react';

function App() {
  const navigate =useNavigate();
  const [access, setAccess] = useState(false);
  // eslint-disable-next-line
  useEffect(() => {!access && navigate('/')},[access]);
  
  // eslint-disable-next-line
  const location = useLocation();
  
  function login() {
       setAccess(true);
       navigate('/home');
 }
 function logout(){
   setAccess(false);
   navigate('/');
 }
 
  return (
    
    <div className="App">
      
      {location.pathname!=='/'&& <Nav logout={logout}/>}
      <Routes>
        <Route exact path='/' element={<LandingPage login={login}/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/formcreate' element={<FormCreate/>}/>
        <Route path='/about' element={<About/>} />
        <Route path='/detail/:id' element={<Detail/>} />
        
      </Routes>


    </div>
    );
}

export default App;
