import React from 'react'
import { Routes, Route ,Link } from "react-router-dom";
import Form from "./form";
import Cookies from 'universal-cookie';


const Secret = (props) => {
  const cookies = new Cookies();
  console.log(props.validation,"....validation");
  console.log(props.username,"...username")
  console.log(props.usercookies,".....usercookies")
  const removeCookies=()=>{
    cookies.remove('user-set',props.username,{ path: '/' });
  }

  return (
    <>
    <h1> Hi {props.username} !!</h1><br />
        <h2>This page can only be accessed by Front-end Devs , Congratulations !!</h2>
        <a href="https://pushanverma.github.io/The-Snake-Game/">You can play Snake game </a>  <br />
        

        {/* <a href="./form"><button>Logout</button></a> */}
        <button onClick={()=>removeCookies()}><Link to="/form" >Logout</Link></button>

        <Routes>
           <Route path='/Form' element={<Form validation={false}/>} /> 
       </Routes> 
    </>
  )
}

export default Secret