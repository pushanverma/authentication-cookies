import logo from './logo.svg';
import './App.css';
import Form from "./components/form";
import Secret from './components/secret';
import Test1 from './components/Test1';
import Test2 from './components/Test2';
import Home from './components/Home';

import {  
  Routes, 
  Route,
  Link } from "react-router-dom";


function App() {

  return (
   <>
      <Routes>
           <Route path='/' element={<Form/>}/>
           <Route path='/form' element={<Form/>}/>
           <Route path='/secret' element={<Secret/>}/>
      </Routes>


   </>
  );
}

export default App;
