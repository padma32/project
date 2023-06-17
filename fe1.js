import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Button from '@mui/material/Button';
const  Roundtrip=()=>{
    let n=useNavigate();
    const[luser,setluser]=useState("");
    const[larr,setlarr]=useState("");
    const[ldepar,setldepar]=useState("");
    const[larrid,setlarrid]=useState("");
    const[ldepard,setldepard]=useState("");
    const[ldepfli,setldeparfli]=useState("");
    const[larf,setlarf]=useState("");
    const[lpass,setlpass]=useState("");
    const Saved=async(e)=>{
        e.preventDefault();
       alert("saved")
       let mydaa={username:luser,arrival:larr,departure:ldepar,arrivaldate:larrid,departuredate:ldepard,departureflight:ldepfli,arrivalflight:larf,passengers:lpass} 
       await axios.post("http://localhost:8089/star1/st1",mydaa);
       
    }
    const D=()=>{
        n('/Delb')
    }
    const Vb=()=>{
        n('/Viewb')
    }
    
    

    return(
        <div className="f">
            <body >
            <Button  style={{marginLeft:1300}}variant="contained" onClick={Vb}>view booking</Button>
            <Button  style={{marginLeft:1300}}variant="contained" onClick={D}>cancel booking</Button>
                
                
            <center style={{paddingTop:80}}> 
        <div style={{ fontSize: 40 }}>
<b> enter username:
    <input  type="text" onChange={e=>setluser(e.target.value)}></input><br/>
                choose departure:
                <select onChange={e=>setldepar(e.target.value)}>
                    <option>select</option>
                    <option>del</option>
                    <option>Hyd</option>
                    <option>banglore</option>
                </select><br/>
             
                choose Arrival:
                <select onChange={e=>setlarr(e.target.value)}>
                    <option>select</option>
                    <option>del</option>
                    <option>Hyd</option>
                    <option>banglore</option>
                </select><br/>
           
                departure date:
                <input type="date" onChange={e=>setldepard(e.target.value)}></input><br/>
               
                arrival date:
                <input type="date" onChange={e=>setlarrid(e.target.value)}></input><br/>
               
                select departure flight:
                <select onChange={e=>setldeparfli(e.target.value)}>
                    <option>select</option>
                    <option>airindia 1230rs</option>
                    <option>emirates 1800rs</option>
                    <option>airfly 1200rs</option>
                    </select> <br/>
                    select arrival flight:
                <select onChange={e=>setlarf(e.target.value)}>
                <option>select</option>
                    <option>airindia 1230rs</option>
                    <option>emirates 1800rs</option>
                    <option>airfly 1200rs</option>
                    </select> <br/>
                enter no of passengers:
                <input type="number" onChange={e=>setlpass(e.target.value)}></input><br/>
    <center><b>
                <Button variant="contained" onClick={Saved}>Submit</Button>
               </b> 
</center>

</b>


             </div>
            
             </center>
        </body>    
 </div>
    )
}
export default Roundtrip;