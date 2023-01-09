import React,{useState,useEffect} from 'react';
import userdetails from "../constants/user";
import Cookies from 'universal-cookie';
import Secret from "./secret";
import { Routes, Route ,Link } from "react-router-dom";

const Form = () => {

  const cookies = new Cookies();
  const [username,setUsername]=useState(null);
  const[password,setPassword]=useState(null);
  const[validation,setValidation]=useState(false);

  
    console.log(username,"...username ");
    console.log(password,"...password ");

    const handleAuthorization=()=>{
      let validationstate=false;
        for(let i=0;i<userdetails.length;i++){
          if(userdetails[i].user==username){
            validationstate =true;
            }
        }
        console.log(validationstate,"....validationstate")

        if(validationstate){
            console.log("you are authorized 👍")
            cookies.set('user-set',username,{ path: '/' });
            console.log(cookies.get('user-set'),".....cookies ");
            setValidation(true)
        }
        else{
            console.log("you are not authorized 👎");
            alert("you are not authorized 👎");
            setValidation(false);
        }

        }

        console.log(validation,".....this is validation")


  return (
    <>
       <form>
       <label> <h1 style={{display:"inline"}}>Enter your username:</h1> <input type="text" onChange={(e)=>{setUsername(e.target.value.toLowerCase())}}/></label>
       <br />
       <label> <h1 style={{display:"inline"}}>Enter your password:</h1> <input type="text" onChange={(e)=>{setPassword(e.target.value.toLowerCase())}}/></label>
       <br />
    </form>   

       <button onClick={()=>handleAuthorization()}>Submit</button>

        {
          validation &&
             <a href="./secret"><button>Click me</button></a>
        }


        <Routes>
           <Route path='/Secret' element={<Secret/>} /> 
       </Routes> 
        
      


    </>
  )
}
  
export default Form