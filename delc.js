import React from "react";
import "./fe1s.css";
import axios from "axios";
import { useState } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
const Delc=()=>{
    let n=useNavigate();
   
    const [lusername,setlusername]=useState("")
    
 const delet = async(e)=>{
 e.preventDefault();
 
let result=await axios.delete("http://localhost:8089/star/delete/"+lusername);
 alert(result.data);
 let r=result.data
 if(r=="Deleted"){
    n('/Contact')
 }

}
return(
    <div className="conupb">
             
          <section>
            <center  style={{paddingTop:200}}>
                <div style={{backgroundColor:"blanchedalmond",height:250,width:400 }}>
            <h1 style={{fontSize:40}} >delete your contact </h1>
        
        enter username:
        <input style={{fontSize:20}}  type="text" onChange={e=>setlusername(e.target.value)} ></input><br/>
       
        <Button onClick={delet}>Submit</Button><br/>
        
        
        </div>
        </center>
        </section>
        </div>
)

}
export default Delc;