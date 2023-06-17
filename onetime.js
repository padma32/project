import React from "react";
import './fe1s.css'
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
const  Onetime=()=>{
    let n=useNavigate();
const[luser,setluser]=useState("");
    const[larr,setlarr]=useState("");
    
    const[larrid,setlarrid]=useState("");
    
    
    const[larf,setlarf]=useState("");
    const[lpass,setlpass]=useState("");
    const Saved=async(e)=>{
        e.preventDefault();
       alert("saved")
       let mydaa={username:luser,arrival:larr,arrivaldate:larrid,arrivalflight:larf,passengers:lpass} 
       await axios.post("http://localhost:8089/star1/st1",mydaa);
       
    }
    const Db=()=>{
        n('/Delbo')
    }
        const Vb=()=>{
            n('/Vibo')
        }
    

    return(
        <div className="f">
           <body>
           <Button  style={{marginLeft:1300}}variant="contained" onClick={Vb}>view booking</Button>
           <Button  style={{marginLeft:1300}}variant="contained" onClick={Db}>cancel booking</Button>
            <section>
            
            
            
        <div style={{ fontSize: 40,marginLeft:100 }}>
<center style={{paddingTop:80}}>
    <b>
    enter username:
    <input  type="text" onChange={e=>setluser(e.target.value)}></input><br/><br/>
                choose Arrival:
                <select onChange={e=>setlarr(e.target.value)}>
                    <option>select</option>
                    <option>del</option>
                    <option>Hyd</option>
                    <option>banglore</option>
                </select><br/>
                <br/>
                Arrival time:
                <input type="date" onChange={e=>setlarrid(e.target.value)}></input><br/>
                <br/>
                select arrival flight:
                <select onChange={e=>setlarf(e.target.value)}>
                <option>select</option>
                    <option>airindia 1230rs</option>
                    <option>emirates 1800rs</option>
                    <option>airfly 1200rs</option>
                    </select> <br/>
                <br/>
                enter no of passengers:
                <input type="number" onChange={e=>setlpass(e.target.value)}></input><br/>
                <br/>
                
                
                <Button variant="Contained" onClick={Saved}>Submit</Button>

</b>
</center>



             </div>
             </section>
             </body>
 </div>
    )
}
export default Onetime;