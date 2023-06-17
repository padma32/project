import React from "react";
import "./fe1s.css";
import axios from "axios";
import { useState } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
const Delb=()=>{
    let n=useNavigate();
   
    const [luser,setluser]=useState("")
    
 const delet = async(e)=>{
 e.preventDefault();
 
let result=await axios.delete("http://localhost:8089/star1/deletes1/"+luser);
 alert(result.data);
 let r=result.data;
       if(r=="Deleted"){
n('/or')
       }
 

}
return(
    <div className="f">
             
          <section>
            <center  style={{paddingTop:200}}>
                <div style={{backgroundColor:"blanchedalmond",height:250,width:400 }}>
            <h1 style={{fontSize:40}} >cancel booking </h1>
        
        enter username:
        <input style={{fontSize:20}}  type="text" onChange={e=>setluser(e.target.value)} ></input><br/>
       
        <Button onClick={delet}>ok</Button><br/>
        
        
        </div>
        </center>
        </section>
        </div>
)

}
export default Delb;