import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

function Dashboard() {



const {user} = useContext(AuthContext);


  return (
    <div>
      <h1>Dashboard</h1>

      {user ? <p>User: {user.name}</p> : <p>Please login</p>}


    </div>
  )
}

export default Dashboard