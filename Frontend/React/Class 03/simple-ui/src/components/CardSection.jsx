import React from 'react'
import './cardSection.css'
import Card from './Card'

function CardSection() {
  return (
    <>          
    
    <div>
      <div className='cardAlignment'>
        <Card />
        <Card />
        <Card />
      </div>
      <div className='cardAlignment'>
        <Card />
        <Card />
        <Card />
      </div>
      <div className='cardAlignment'>
        <Card />
        <Card />
        <Card />
      </div>
      <div className='cardAlignment'>
        <Card />
        <Card />
        <Card />
      </div>
    </div>
    
    </>
  )
}

export default CardSection