import React from 'react'
// import { Link } from "react-router-dom";
import Test1 from './Test1';
import Test2 from './Test2';
import {  
  Routes, 
  Route,
  Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
  

const Home = () => {

  const navigate = useNavigate();

  const handleClick=()=>{ navigate('/test1', { replace: true }); }

  console.log("home page called")

  return (
    <>
        <h1>Home Page</h1>
      <br />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/test1" >Test1</Link>
        </li>
        <li>
          <Link to="/test2">Test2</Link>
        </li>
      </ul>

      <button onClick={()=>handleClick()}>Click</button>
      
    </>
  )
}

export default Home