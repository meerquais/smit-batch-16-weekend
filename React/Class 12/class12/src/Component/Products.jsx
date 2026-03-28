import React from 'react'
import { Link } from 'react-router-dom'

function Products() {

  const products = [
    {id:1,name: "Laptop"},
    {id:2,name: "Mobile"},
    {id:3,name: "Tablet"},
  ]
  return (
    <div>
      <h2>Products</h2>

      {products.map(product =>(
        <Link to={`/product/${product.id}`}>{product.name}</Link>
      ))}



    </div>
  )
}

export default Products