// import React from 'react'
import './Products.css'

const Products = (props) => {
      // console.log(props.ManyProducts)
     // console.log(props.ManyArray)
    // console.log(props.ManyObj)
    console.log(props.ManyLoop)


    const ForAlert = () =>  {
         alert('Buy Sucessfully')
    }


  return (
    <div>
      {/* <h1>Products Name : {props.ManyProducts.name}</h1>
      <h2>Products Price : {props.ManyProducts.price}</h2> */}


      {/* <h1>1st Array : {props.ManyArray[0]}</h1>
      <h1>2nd Array : {props.ManyArray[1]}</h1>
      <h1>3rd Array : {props.ManyArray[2]}</h1>
      <h1>4th Array : {props.ManyArray[3]}</h1> */}


    {/* <h1>Phone Name : {props.ManyObj[0].name}</h1>
    <h2>Price : {props.ManyObj[0].price}</h2>
    <h1>Phone Name : {props.ManyObj[1].name}</h1>
    <h2>Price : {props.ManyObj[1].price}</h2> */}


    <h1>Phone Name : {props.ManyLoop.name}</h1>
    <h2>Price : {props.ManyLoop.price}</h2>
    <button onClick={ForAlert} > Buy Now </button>




    </div>
  )
}

export default Products
