import React from "react";

import axios from 'axios'
import { useState } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
const Signup=()=>

{
    let n=useNavigate();
    const[username,setusername]=useState("");
    const[password,setpassword]=useState("");
    const[email,setemail]=useState("");
    const handleSubmit = async(e) => {
        if(username=='')
        {
        
       alert('please enter username' )
        }
        else if(email=='')
        {
        alert('please enter email id' )
        }
        else if(password=='')
        {
        alert('please enter password' )
        }
        else{
        let data={username:username,password:password,email:email}
        let result=await axios.post('http://localhost:8089/start/logindara',data)
        alert(result.data)
        let r=result.data;
        if(r=="added"){
            n("/")
        }
        
        }
    }
    

     
    
    

    return(

       <div className="l">
             
          
            <center  style={{paddingTop:200}}>
                <div style={{backgroundColor:"blanchedalmond",height:250,width:400 }}>
            <h1 style={{fontSize:40}} >signup page </h1>
        
         
        username:
        <input type="text" value={username} onChange={e=>setusername(e.target.value)} ></input><br/>
        email:
        <input type="email"  value={email} onChange={e=>setemail(e.target.value)}></input><br/>
        create password:
        <input type="password" value={password} onChange={e=>setpassword(e.target.value)}></input><br/>
       
        <Button variant="contained" onClick={handleSubmit}>Submit</Button>
        </div>
        </center>
    
        </div>
    )
}

export default Signup;