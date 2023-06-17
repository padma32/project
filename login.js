import {React} from "react";
import axios from 'axios'
import { Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Login=()=>
{
    let n=useNavigate()
    const[username,setusername]=useState("");
    const[password,setpassword]=useState("");
    const login = async (e) => { 
        e.preventDefault()
       if(username=='') {
        alert('please enter username')
        }
        else if(password=='') {
        alert('please enter password')
        }
        else {
        
        let result=await axios.post("http://localhost:8089/start/login/"+username+"/"+password)
        alert(result.data)
        let r=result.data;
        if(r=="success"){
            n("/Home")
        }
        }
    }
   
    return(
        
       <div className="h">
             
          <section>
            <center  style={{paddingTop:200}}>
                <div style={{backgroundColor:"blanchedalmond",height:250,width:400 }}>
            <h1 style={{fontSize:40}} >Login page </h1>
        
        username:
        <input style={{fontSize:20}}  type="email" value={username} onChange={e=>setusername(e.target.value)}></input><br/>
        password:
        <input style={{fontSize:20}} type="password" value={password} onChange={e=>setpassword(e.target.value)} ></input><br/>
        <button onClick={login}>login</button><br/>
        create new user:
        <a href="/Signup">create</a>
        
        </div>
        </center>
        </section>
        </div>
    )
}

export default Login;