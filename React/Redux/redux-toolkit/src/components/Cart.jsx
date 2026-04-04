import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { removeFromCart, increaseQty , decreaseQty , calculateTotal } from '../features/cart/cartSlice'

import { useEffect } from 'react'

function Cart() {

  const {items , totalAmount} = useSelector(state =>state.cart);
  const dispatch = useDispatch();


  useEffect(()=>{
    dispatch(calculateTotal());
  },[items, dispatch])


  return (
    <>

      <h2>Cart</h2>

      {items.map(item =>(
        <div key={item.id}>
          <span>{item.name}</span>
          <span>Qty : {item.quantity}</span>

          <button onClick={()=>{
            dispatch(increaseQty(item.id))
          }}>+</button>
          <button onClick={()=>{
            dispatch(decreaseQty(item.id))
          }}>-</button>
          <button onClick={()=>{
            dispatch(removeFromCart(item.id))
          }}>Remove</button>
        </div>
      ))}

      <h3>Total: Rs : {totalAmount}</h3>
    
    
    </>
  )
}

export default Cart