// import React from 'react'
import './Services.css'

const Services = () => {

function adding(num){
    console.log(num*2)
  }


  return (
    <div>
      <h1 id="servicesCompo">Services Page</h1>
      <button onClick={ () =>adding(5) } className="click-btn">Click Me</button>
    </div>
  )
}

export default Services
