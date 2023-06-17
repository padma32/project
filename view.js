import React from "react";
import "./fe1s.css";
import axios from "axios";
import { useState } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Contact from "./Contact";
const View=()=>{
        const[mdata,setData]=useState([])
        var getdata=async(a)=>{
            a.preventDefault()
            let mynewdata=await axios.get("http://localhost:8089/star/gm");
            setData(mynewdata.data)
        }
    
    <Contact/>
    
    return(
        
        <div>
            <button onClick={getdata}>get data</button>
            <table>
                <tr>
                    <th>name</th>
                    <th>username</th>
                    <th>age</th>
                    <th>gender</th>
                    <th>contact</th>
                    <th>address</th>
                </tr>
                {
                    mdata.map((k)=>{
                        return <tr>
                        <td>{k.name}</td>
                        <td>{k.username}</td>
                        <td>{k.age}</td>
                        <td>{k.gender}</td>
                        <td>{k.contact}</td>
                        <td>{k.address}</td>
                        </tr>
                    })
                }
            </table>
        </div>
    )
            
            }
            export default View;
