import React from 'react'
import "./Card.css";

const Card = ({heading, description}) => {
  return (
    <div>
        <h3 className="heading">
            {heading}
        </h3>
        <p className="description">{description}</p>
    </div>
  )
}

export default Card