import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { addToCart } from '../features/cart/cartSlice'

function Products() {

  const products = useSelector(state => state.products);
  const dispatch = useDispatch();
  return (
    <>

      <h2>Products</h2>

      {products.map(p=>(
        <div key={p.id}>
          <span>{p.name} - Rs {p.price}</span>
          <button onClick={()=>{
            dispatch(addToCart(p))
          }}>Add</button>
        </div>
      ))}
    
    </>
  )
}

export default Products