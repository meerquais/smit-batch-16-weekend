import React from 'react'

function Status({isOnline}) {
  return (
    <>

      <p>{isOnline ? "Online" : "Offline"}</p>
    
    
    </>
  )
}

export default Status