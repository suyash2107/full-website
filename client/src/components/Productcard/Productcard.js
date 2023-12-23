import React from 'react'
import "./Productcard.css";

function Productcard({id, name, price, description,image}) {
  return (
    <div>
        <img src={image} alt={name}/>
    </div>
  )
}

export default Productcard