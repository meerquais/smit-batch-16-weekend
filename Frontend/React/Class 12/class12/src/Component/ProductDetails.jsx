import React from 'react'
import { useParams } from 'react-router-dom'

function ProductDetails() {

  const {id} = useParams()

  return (
    <div>
      <h1>Product Details</h1>
      <p>Product ID: {id}</p>
    </div>
  )
}

export default ProductDetails