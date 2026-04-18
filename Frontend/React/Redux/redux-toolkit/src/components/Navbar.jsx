import React from 'react'
import { useSelector } from 'react-redux'

function Navbar() {
  const items = useSelector(state => state.cart.items)
  return (
   <>

    <div style={{padding:"10px" , background:"#ddd"}}>
      <h2>Shopping Cart</h2>
      <p>Items: {items.length}</p>
    </div>
   
   </>
  )
}

export default Navbar