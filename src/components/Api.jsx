import React,{useEffect} from "react";
import { useState } from "react";
import { scryRenderedComponentsWithType } from "react-dom/test-utils";


const ApiData =()=>{
   
useEffect(async()=>{
          fetch('https://jsonplaceholder.typicode.com/comments')
         .then(async(res)=>{
            const data =await res.json()
             console.log(data)
         })        
    },[])
 
  return(
    <div>
      <h1>GYU7</h1>
    </div>
  )
}

export default ApiData