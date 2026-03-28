import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function UserDetails() {

  const {id} = useParams()

  const [user,setUser] = useState(null)


  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(res => res.json())
    .then(data => setUser(data))
  }, [id])

  if(!user)return <p>Loading...</p>


  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  )
}

export default UserDetails