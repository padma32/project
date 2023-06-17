import React from "react";

import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

import "./fe1s.css";
const Conup=()=>{
    let n=useNavigate();
    const[lname,setlname]=useState("");
    const[lusername,setlusername]=useState("");
    const[lage,setlage]=useState("");
    const[lgender,setlgender]=useState("");
    const[lContact,setlContact]=useState("");
    const[laddress,setladdress]=useState("");

    const update = async(e)=>{
        e.preventDefault();
        
        let mydaa={name:lname,username:lusername,age:lage,gender:lgender,contact:lContact,address:laddress}
        let result=await axios.put("http://localhost:8089/star/edi/"+lname,mydaa);
        alert(result.data);
        let k=result.data;
       if(k=="Updated"){
n('/contact')
       }
        
    }
return(
    <div className="conupb">
    <div >
        
        <body >
        <section >
            
              <center style={{fontSize:30,paddingTop:200}} > 
            Name:
            <input type="text" placeholder="enter your name" onChange={e=>setlname(e.target.value)} Required></input><br/>
            username:
            <input type="text" placeholder="username" onChange={e=>setlusername(e.target.value)} Required></input><br/>
            Age:
            <input type="text" placeholder="enter your age" onChange={e=>setlage(e.target.value)}Required></input><br/>
            Gender:
            <input type="radio" name="one" onChange={e=>setlgender(e.target.value)}Required></input>male
            <input type="radio" name="one" onChange={e=>setlgender(e.target.value)}Required></input>female<br/>
            Contact:
            <input type="number" onChange={e=>setlContact(e.target.value)}Required></input><br/>
            Address:
            <input type="text" onChange={e=>setladdress(e.target.value)}Required></input><br/>
            <Button variant="contained" onClick={update}>Submit</Button>
           </center>
         
        </section>
        </body>
        
    </div>
    </div>
)
}
export default Conup;