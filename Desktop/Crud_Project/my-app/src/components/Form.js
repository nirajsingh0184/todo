import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import Table from './Table';
import { v4 as uuidv4 } from 'uuid';
import { getProductDetails, saveProductDetails, updateProductDetails } from '../services/service';
import serialize from 'form-serialize';
import { formSerialize } from '../services/serialize';

function Form() {
  const fname = useRef();
  const lname = useRef();
  const [product, Setproduct] = useState([]);
  const [btnText, SetbtnText] = useState("Add Product");
  const [productID, setProductID] = useState(0);

  const changeState = () => {
    let data = formSerialize("productForm");
    data.isActive=true;
    if (btnText == "Add Product") {
      saveProductDetails(data).then((res) => {
        refreshPage();
      });
    }
    else {
      data["id"] = productID;
      updateProductDetails(data).then((res) => {
        refreshPage();
      })
    
    }
  }

  function refreshPage() {
    fname.current.value = '';
    lname.current.value = '';
    SetbtnText("Add Product");
    getProductInfo();
  }

  useEffect(() => {
    getProductInfo();
  }, [])

  function getProductInfo() {
    getProductDetails().then((res) => {
      const isActiveData=res.filter((item)=>
        item.isActive==true
      )
      console.log(isActiveData);
      Setproduct(isActiveData);
    })
  }

  function updateProductData(prod) {
    fname.current.value = prod.fname;
    lname.current.value = prod.lname;
    SetbtnText("Update Product");
    setProductID(prod.id);
  }

  function deleteProductData(prod) {
    let res=window.confirm("Are you sure you want to delete");
    if(res){
    prod.isActive=false;
    updateProductDetails(prod).then((res) => {
      alert("Record deleted");
      refreshPage();
    })
  }
  }

  return (
    <>
      <form id='productForm'>
        <h2>Registration form</h2>
        <label for="fname">First name:</label>
        <input type="text" id="fname" name="fname"
          ref={fname}></input>
        <label for="lname">Last name:</label>
        <input type="text" id="lname" name="lname" ref={lname}></input>
        <button type="button" onClick={changeState}>{btnText}</button>
      </form>
      <Table nameData={product} updateData={updateProductData} deleteData={deleteProductData}/>
    </>
  )
}

export default Form;