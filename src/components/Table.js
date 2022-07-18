import React, { useRef } from 'react';


export default function Table(props) {
    const product=props.nameData;
    console.log(product,'niraj');
  return (
<div>  
    <div className='table'>
    
      {/* <tr>
        <th>
         <td>id</td>
         <td>fname</td>
         <td>lname</td>
        </th>
        </tr>
        <tbody>
       {product.map((prod)=>{
     
            return(
                <tr>
                    <td>{prod.productId}</td>
                    <td>{prod.productName}</td>
                </tr>
            )
       }
       )}
        </tbody> */}
        <table class="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
    </tr>
  </thead>
  <tbody>
  {product.map((prod)=>{
     return(
         <tr  key={prod.productId}>
             <td>{prod.productId}</td>
             <td>{prod.productName}</td>
             <td>{prod.productdesc}</td>
         </tr>
     )
}
)}
  </tbody>
</table>
     
    </div>
</div>
  )
}

