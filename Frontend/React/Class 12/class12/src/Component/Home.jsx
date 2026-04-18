import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>

      <h2>Users</h2>

      <Link to="/user/1">User 1</Link>
      <Link to="/user/2">User 2</Link>
      <Link to="/user/3">User 3</Link>
      <Link to="/user/4">User 4</Link>
      <Link to="/user/5">User 5</Link>



    </div>
  )
}

export default Home