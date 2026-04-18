import React from 'react'

function Profile({user}) {
  return (
    <>
      <h2>{user.name}</h2>
      <p>{user.age}</p>
    
    </>
  )
}

export default Profile