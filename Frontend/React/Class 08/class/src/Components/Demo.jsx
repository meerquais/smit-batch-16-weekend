import React, { useEffect } from 'react'

function Demo() {

  console.log("Render");

  useEffect(()=>{
    console.log("Mounted");
    
  },[]);
  
  return (
    <>
    
      <h1>Hello!</h1>
    </>
  )
}

export default Demo