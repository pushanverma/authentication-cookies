import React,{useState,useEffect} from 'react';
import userdetails from "../constants/user";
import Cookies from 'universal-cookie';


const Form = () => {

  const cookies = new Cookies();
  
  const [username,setUsername]=useState(null);
  const[password,setPassword]=useState(null);
  
  
  

    // console.log(userdetails,"....user details")
    // console.log(userdetails.length,"...length");

    // const handleCheck=(checkusername,checkpasword)=>{
    //     console.log("function is called");
    //     console.log(checkusername,"....username in handleCheck ");
    //     console.log(checkpasword,"....password in handleCheck ");

    //     for(let i=0;i<userdetails.length;i++){
    //         if(userdetails[i].user==checkusername){
    //           setvalidation(true)
    //         }
    //     }
    //     console.log(validation,".....validation");

    //   if(validation){
    //     console.log("you are authorized 👍")
    //     cookies.set('user-set',"Pushan" ,{ path: '/' });
    //     console.log(cookies.get('user-set'));
    //   }
    //   else{
    //     console.log("you are not authorized 👎");
    //       alert("you are not authorized 👎");
    //   }
    
    // }

   

    console.log(username,"...username ");
    console.log(password,"...password ");

   
  return (
    <>
       <form>
       <label> <h1 style={{display:"inline"}}>Enter your username:</h1> <input type="text" onChange={(e)=>{setUsername(e.target.value)}}/></label>
       <br />
       <label> <h1 style={{display:"inline"}}>Enter your password:</h1> <input type="text" onChange={(e)=>{setPassword(e.target.value)}}/></label>
       <br />
    </form>   

       <button onClick={()=>{ 

        let validationstate=false;
        for(let i=0;i<userdetails.length;i++){
          if(userdetails[i].user==username){
            validationstate =true;
            }
        }
        console.log(validationstate,"....validationstate")

        if(validationstate){
        console.log("you are authorized 👍")
        cookies.set('user-set',"Pushan" ,{ path: '/' });
        console.log(cookies.get('user-set'));
        }
        else{
          console.log("you are not authorized 👎");
            alert("you are not authorized 👎");
        }


        // handleValidation();
        }}>Submit</button>
    </>
  )
}
  
export default Form