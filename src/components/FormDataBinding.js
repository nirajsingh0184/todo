import React, { useRef } from 'react';
import {useState} from 'react';

function Welcome() {
    const [inputValue,SetValue]=useState("");
    const fname=useRef();
    const lname=useRef();

    function binding() {  
      const _fname=fname.current.value;
      const _lname=lname.current.value;
      SetValue(_fname+_lname); 
     }

    return (
        <div>
            <h1>Welcome to form</h1>
            <form>
                <label for="fname">First name:</label>
                <input type="text" id="fname" name="fname" ref={fname}></input>
                <label for="lname">Last name:</label>
                <input type="text" id="lname" name="lname" ref={lname}></input>
                <button type="button" onClick={()=>{
                    binding()
                }}>+</button>
            </form>
            <div className='form-control'>
           <input type="text" value={inputValue}></input>
            </div>
        </div>
    )
}

export { Welcome };