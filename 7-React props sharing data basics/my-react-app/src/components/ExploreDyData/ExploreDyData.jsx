// import React from 'react'

    const exploreStyle = {
        border: '2px solid red',
        padding: '10px',
        backgroundColor: 'blue',
        borderRadius: '10px',
        color: 'black',
        textAlign: 'center',
        fontSize: '20px',
        margin: '10px',      
    }

const ExploreDyData = (props) => {
         // console.log(props)
        // console.log(props.name)

  return (
     // <div style={{border:'2px solid red', padding:'10px'}}>
    <div style={exploreStyle}>
      <h2> Explore Dynamic Data </h2>
      <h2> Name: {props.name}</h2>
      <p> Age: {props.age}</p>
    </div>
  )
}

export default ExploreDyData
