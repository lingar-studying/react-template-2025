import React, { useState, useEffect } from 'react';
import {Box, Button} from "@mui/material";

export const Car=()=>{
    const [company,setCompany]= useState("no company");
    const  changeModel=(event)=>{
        const value= event.target.value;
        setCompany(value);
    }

    const [message, setMessage] = useState("Don't know");

    useEffect(()=>{
        // setCompany("jjj " );
        console.log("Company has changed ", company );
        if(company.toLowerCase() === "honda"){
            setMessage("Greate Company");
        }else{
            setMessage("I don't know");
        }

    },[company]);


    useEffect(()=>{
       console.log("Message has been changed");

    },[message]);



    return(
        <>
    <p>     
    my car= {company}
  </p>
  

            <h3>component controlled by react ( by assigning the value directly). will be affected by reset</h3>
   <input type="text" onChange={changeModel} value = {company} />


            <h3>component uncontrolled by react ( no assigning the value directly). won't be affected by reset</h3>

            <input type ="text" onChange={changeModel} />

            <button onClick={() => setCompany("")}>איפוס</button>

            <Box component = {"div"}>What do you say about my compnay? <br/>
            {message}
            </Box>
        </>)
}
