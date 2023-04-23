import React,{useState,useEffect} from 'react';
import userdetails from "../constants/user";
import Cookies from 'universal-cookie';
import Secret from "./secret";
import { Routes, Route ,Link } from "react-router-dom";
import FormCheckLabel from 'react-bootstrap/esm/FormCheckLabel';

const Form = (props) => {
  console.log("form is called 123");


console.log(props.validation,"...validation")

  const cookies = new Cookies();

  const [username,setUsername]=useState(null);
  const[password,setPassword]=useState(null);
  const[validation,setValidation]=useState(false);

    var usercookies=null;
    console.log(username,"...username ");
    console.log(password,"...password ");


function checkAll(lengthcheck,specialchcheck,numericheck,uppercasecheck)
{

  console.log(lengthcheck,"...lengthcheck");
  console.log(specialchcheck,"...specialchcheck");
  console.log(numericheck,"...numericheck");
  console.log(uppercasecheck,"...uppercasecheck");

      if(lengthcheck && specialchcheck && numericheck && uppercasecheck){
        return true;
      }
      else{
        alert("fill right details....");
        return false;
      }
  }








// Calling on Submit ->
    const handleAuthorization=(password)=>{

      let specialCh=["~","@","#","$","%","^","&","*","(",")","-","_","+","{","}","[","]","<",">","?"];
      let numericCh=["0","1","2","3","4","5","6","7","8","9"];
      let uppercaseCh=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

  

//----------------CHECKING USERNAME------------------------------

      var usernamecheck=false;
    
        for(let i=0;i<userdetails.length;i++){
          if(userdetails[i].user==username){
            usernamecheck =true;
            }
        }

        console.log(usernamecheck,"....usernamecheck")


  //----------------CHECKING PASSWORD-------------------------
  let passwordcheck=false;
  console.log(password,"...password reached in handleAuthorization ");

  // let fetchpassword="Pushan@1";

  let fetchpassword=password;

  console.log(fetchpassword,".....fetchpassword");

  var lengthcheck;
  var specialchcheck;
  var numericheck;
  var uppercasecheck;

  if(fetchpassword.length>=8){
    console.log("length greater than 8");
    lengthcheck=true;
   }

  for(let i=0;i<fetchpassword.length;i++)
  {
       let singleChar=fetchpassword.charAt(i);
       if(specialCh.includes(singleChar)){
           console.log("special char found")
           specialchcheck=true;
       }
       else if(numericCh.includes(singleChar)){
               console.log("numeric found")
               numericheck=true;
       }
       else if(uppercaseCh.includes(singleChar)){
           console.log("uppercase found")
           uppercasecheck=true;
           console.log(uppercasecheck,".....uppercase chceck 1")
       }
}

console.log(uppercasecheck,".....uppercase chceck 2")


passwordcheck=checkAll(lengthcheck,specialchcheck,numericheck,uppercasecheck);

console.log(passwordcheck,"......passwordcheck")



//-----------------THE END---------------

console.log("before passing to secret page,passing username and passwordcheck",usernamecheck,passwordcheck);

if(usernamecheck && passwordcheck){
  console.log("you are authorized 👍");
  usercookies=cookies.set('user-set',username,{ path: '/' });
  console.log(cookies.get('user-set'),".....cookies ");
  setValidation(true);
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
       <label> <h1 style={{display:"inline"}}>Enter your username:</h1> <input type="text" onChange={(e)=>{setUsername(e.target.value)}}/></label>
       <br />
       <label> <h1 style={{display:"inline"}}>Enter your password:</h1> <input type="text" onChange={(e)=>{setPassword(e.target.value)}}/></label>
       <br />
    </form>   

       <button onClick={()=>handleAuthorization(password)}>Submit</button>

        {
          validation && 
          <button><Link to={{
      pathname: "/secret",
      search: "?sort=date",
      state: { fromHome: true },
    }} >Click me</Link></button>

        }


        <Routes>
           <Route path='/Secret' element={<Secret validation={validation}  username={username}  usercookies={usercookies} />} /> 
       </Routes> 
        
      
    </>
  )
}
  
export default Form