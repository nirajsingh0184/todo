import React, { useRef, useState } from 'react';

export default function Table(props) {
  const product = props.nameData;
  return (
    <div>
      <div className='table'>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">Fname</th>
              <th scope="col">Lname</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {product.map((prod) => {
              return (
                <tr>
                  <td>{prod.id}</td>
                  <td>{prod.fname}</td>
                  <td>{prod.lname}</td>
                  <td>
                    <button type="button" className='btn btn-primary' onClick={() =>props.updateData(prod)}>Update</button>
                    &nbsp;
                    <button type="button" className='btn btn-danger' onClick={()=>props.deleteData(prod)}>Delete</button>
                  </td>
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

