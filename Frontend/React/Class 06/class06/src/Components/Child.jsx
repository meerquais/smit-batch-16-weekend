import React from 'react'

function Child({send}) {
  return (
    <>

      {/* <button onClick={()=>{
        send("Hello Parent")
      }} >Send</button> */}
    
        <input type="text" onChange={(e)=>{
          send(e.target.value)
        }} />

    </>
  )
}

export default Child