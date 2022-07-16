import { useRef } from "react";

export function UserRegistration() {
    const UserName=useRef();
//    const email=useRef();
   function saveData(){
        let _name=UserName;
        console.log(_name);
        // let _email=email.current.value.trim();
     alert(_name);
    //  alert(_name.length);
    //  alert(_email);
   }

   function validateLength(){
    let _name=UserName.current.value.trim().length;
    if(_name>5){
        UserName.current.value =UserName.current.value.substr(0,4);
        alert('Exceded');
       
    }
   }

    return (
        <div>
            <input type="text" placeholder="UserName" className="form-control" ref={UserName} onChange={validateLength}></input>
            <input type="text" placeholder="email" className="form-control"></input>
            <input type="password" placeholder="Password" className="form-control"></input>
            <input type="password" placeholder="Confirm Password" className="form-control"></input>
            <input type="date" placeholder="DOB" className="form-control"></input>
            <div>
                <div>Gender</div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>
                    <label className="form-check-label" for="flexRadioDefault1">
                     Male
                    </label>
                </div>
                <div class="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"></input>
                    <label className="form-check-label" for="flexRadioDefault2">
                        Female
                    </label>
                </div>

                <button type="button" className="btn btn-primary" onClick={saveData}>Register</button>
            </div>
        </div>
    )
}