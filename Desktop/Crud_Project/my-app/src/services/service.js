import { Profiler } from "react";

export function getProductDetails(){
    return fetch('http://localhost:3000/products').then(res=>res.json());
}

// export function saveProductDetails(product){
// var urlencoded = new URLSearchParams();
// urlencoded.append("fname", product.fname);
// urlencoded.append("lname", product.lname);
  
//     console.log(product,'saveData');
//     let options={
//         method:"POST",
//         headers:{"Content-Type":"application/x-www-form-urlencoded"},
//         body:urlencoded 
//     }
//     debugger;
//     return fetch("http://localhost:3000/products",options).then(res=>res.json());
//     debugger;
// }



export function saveProductDetails(product){ 
        let options={
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(product)
        }
    return fetch("http://localhost:3000/products",options).then(res=>res.json())
    }

    export function updateProductDetails(product){ 
        console.log(product,'updateData');
        let options={
            method:"PUT",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(product)
        }
    return fetch("http://localhost:3000/products/"+product.id,options).then(res=>res.json())
    }