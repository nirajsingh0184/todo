import React, { useRef } from 'react';
import {useState} from 'react';
import Table from './Table';
import { v4 as uuidv4 } from 'uuid';


function Form() {
  const fname=useRef();
  const lname=useRef();

const [product,Setproduct]=useState([]); 
const changeState =()=>{
     let productItems=[];
       let obj ={
          productId:uuidv4(),
          productName:fname.current.value,
          productdesc:lname.current.value
       }
       
       productItems=JSON.parse(JSON.stringify(product));
       productItems.push(obj);
       Setproduct(productItems);
       console.log(product);
    }

console.log(product);
    return (
        <>
         <form>
            <h2>Registration form</h2>
                <label for="fname">First name:</label>
                <input type="text" id="fname" name="fname"
                ref={fname}></input>
                <label for="lname">Last name:</label>
                <input type="text" id="lname" name="lname"  ref={lname}></input>                       
               <button type="button" onClick={changeState}>Add</button>  
        </form>
        <Table nameData={product}/>       
        </>
  )
}

export default Form;