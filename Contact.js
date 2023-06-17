import React from "react";
import "./fe1s.css";
import axios from "axios";
import { useState } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
const Contact=()=>
{
    let n=useNavigate();
    const[lname,setlname]=useState("");
    const[lusername,setlusername]=useState("");
    const[lage,setlage]=useState("");
    const[lgender,setlgender]=useState("");
    const[lContact,setlContact]=useState("");
    const[laddress,setladdress]=useState("");
    const Saved=async(e)=>{
        e.preventDefault();
      
       let mydaa={name:lname,username:lusername,age:lage,gender:lgender,contact:lContact,address:laddress} 
     let result=  await axios.post("http://localhost:8089/star/stu",mydaa);
       alert(result.data)
       let r=result.data
       if(r=="saved"){
        n('/or')
       }
    } 
    
    
    const D=()=>{
        n('/Delc')
    }
 const Mu=()=>{
    n('/Conup')
 }
 const V=()=>{
    n('/View')
 }

     
    return(
        <div className="conupb">
        
               
            <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My AIRLINES
          </Typography>
          
          <div class="loginbutton">
            <Button variant="contained" onClick={V} >view</Button>
            <Button variant="contained" onClick={Mu} >Edit</Button>
            <Button variant="contained" onClick={D} >Delete</Button>
            </div>
          <div >
            </div>
            </Toolbar>
            </AppBar>
            </Box>
            
           

            <body >
            <section >
                  <center style={{fontSize:30,paddingTop:150}} > 
                Name:
                <input type="text" placeholder="enter your name" onChange={e=>setlname(e.target.value)} Required></input><br/>
                username:
                <input type="text" placeholder="username"  onChange={e=>setlusername(e.target.value)} Required></input><br/>
                Age:
                <input type="text" placeholder="enter your age" onChange={e=>setlage(e.target.value)}Required></input><br/>
                Gender:
                <input type="radio" name="one" onChange={e=>setlgender(e.target.value)}Required></input>male
                <input type="radio" name="one" onChange={e=>setlgender(e.target.value)}Required></input>female<br/>
                Contact:
                <input type="number" onChange={e=>setlContact(e.target.value)}Required></input><br/>
                Address:
                <input type="text" onChange={e=>setladdress(e.target.value)}Required></input><br/>
                <Button variant="contained" onClick={Saved}>Submit</Button>
               </center>
             
            </section>
            
            </body>
            
        </div>
        
    )
}
export default Contact;