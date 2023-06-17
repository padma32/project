import React from "react";
import "./fe1s.css";
import axios from "axios";
import { useState } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Contact from "./Contact";
import Onetime from "./onetime";
import Roundtrip from "./fe1";
const Vibo=()=>{
        const[mdata,setData]=useState([])
        var getdata=async(a)=>{
            a.preventDefault()
            let mynewdata=await axios.get("http://localhost:8089/star1/gm1");
            setData(mynewdata.data)
        }
    
    
    <Onetime/>
    
    
    return(
        
        <div>
            <Button variant="contained" onClick={getdata}>get data</Button>
            <table>
                <tr >
                    <th>username</th>
                    <th>arrival</th>
                    
                    <th>arrivaldate</th>
                    
                    <th>arrivalflight</th>
                    
                    <th>passengers</th>
                    
                </tr>
                {
                    mdata.map((k)=>{
                        return <tr>
                            <td>{k.username}</td>
                        <td>{k.arrival}</td>
                        
                        <td>{k.arrivaldate}</td>
                        
                        <td>{k.arrivalflight}</td>
                        
                        <td>{k.passengers}</td>
                        </tr>
                    })
                }
            </table>
        </div>
    )
            
            }
            export default Vibo;
