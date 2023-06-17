import React from "react";
import {useNavigate} from 'react-router-dom';
import Button from '@mui/material/Button';
import flight from './images/th.jpeg'

const Home=()=>
{
    let n=useNavigate();
    function goHome(){
        n('/')
    }
    function goContact(){
        n('/Contact')
    }
   
    

    return(
        <div>
            <header>
            
            </header>
            <section>
            <center style={{paddingTop:100}}>
             <h1 style={{fontSize:40}}>WELCOME TO MYAIRLINES</h1>
            <img src={flight} height={400} width={800}></img><br/>
            <Button variant="contained" href='/contact'>next</Button>
             
            </center>
            
            
            </section>
        </div>
    )
}
export default Home;