// import React from 'react'
import './Services.css'

const Services = () => {
    function update(){
       const servicesCompo = document.getElementById('servicesCompo');
       servicesCompo.innerText = 'Hello i am update components';
    }


  return (
    <div>
      <h1 id="servicesCompo">Services Page</h1>
      <button onClick={update} className="click-btn">Click Me</button>
    </div>
  )
}

export default Services
