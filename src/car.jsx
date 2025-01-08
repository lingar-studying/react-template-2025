import React, { useState } from 'react';

export const Car=()=>{
    const [company,setCompany]= useState("no company");
    const  changeModel=(event)=>{
        const value= event.target.value;
        setCompany(value);
    }

    return(
        <>
    <p>     
    my car= {company}
  </p>
  

  <input type ="text" onChange={changeModel} value ={company}/>
  {/* <input type="text" onChange={changeModel2} /> */}
    </>)
}
