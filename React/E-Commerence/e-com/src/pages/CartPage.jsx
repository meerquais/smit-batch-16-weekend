import React, { useEffect } from 'react'
import { addToCart , calculateTotal, saveCart } from '../features/cart/cartSlice'
import { useDispatch, useSelector } from 'react-redux'

function CartPage() {

    const dispatch = useDispatch();
    const {items , total} = useSelector((s)=>s.cart);
    const {user} = useSelector((s)=>s.auth);

    useEffect(()=>{
      dispatch(calculateTotal())
    },[items]);




  return (
    <>

      <div className='p-4'>
        {items.map((i)=>(
          <div key={i.id}>

            <p>{i.name}</p>
          </div>
        ))}


        <h3>Total : {total}</h3>

        <button className='bg-blue-500 text-white px-2' onClick={()=>{
          dispatch(saveCart({userId:user.uid,items}))
        }}>Save Cart</button>
      </div>   
    
    </>
  )
}

export default CartPage;