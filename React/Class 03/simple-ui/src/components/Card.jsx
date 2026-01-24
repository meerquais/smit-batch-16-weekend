import React from 'react'
import './card.css'
import image from '../assets/asset1.jpeg'

function Card() {
  return (
    <div className='card'>
      <img src={image} width="500px" />
      <p>Colombia Antioquia (8oz)</p>
    </div>
  )
}

export default Card