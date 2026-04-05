import React, { useState } from 'react'
import { addProduct } from '../features/products/productsSlice'
import { useDispatch } from 'react-redux';

function Admin() {

  const [name , setName] = useState("");
  const [price , setPrice] = useState("");
  const dispatch = useDispatch();

  return (
    
    <>
    

      <div className='p-6'>

        <h2 className='text-xl mb-2'>Admin Panel</h2>

        <input type="text" onChange={(e)=>{
          setName(e.target.value)
        }} />
        <input type="text" onChange={(e)=>{
          setPrice(e.target.value)
        }} />

        <button className='bg-blue-500 text-white px-2' onClick={()=>{
          dispatch(addProduct({name,price:Number(price)}))
        }}>Add Product</button>

      </div>
    
    
    
    </>



  )
}

export default Admin