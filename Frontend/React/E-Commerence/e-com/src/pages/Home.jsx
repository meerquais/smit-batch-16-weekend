import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../features/products/productsSlice';
import { addToCart } from '../features/cart/cartSlice';


function Home() {

  const dispatch = useDispatch();
  const {items} = useSelector((s)=>s.products);

  useEffect(()=>{
    dispatch(fetchProducts())
  },[])


  return (
    <>
      <div className='p-4 grid grid-cols-2 gap-4'>
        {items.map((p)=>(
          <div key={p.id} className='border p-3'>
            <h3>{p.name}</h3>
            <p>{p.price}</p>

            <button className='bg-green-500 text-white px-2'
              onClick={()=>{
                dispatch(addToCart(p))
              }}
            >Add</button>

          </div>
        ))}

      </div>
    
    
    </>
  )
}

export default Home