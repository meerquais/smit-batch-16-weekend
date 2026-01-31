import React from 'react'

function Button({BtnName = "Submit" , bgColor = "red", wid="100px"}) {
  return (
    <>
    
      <button style={{backgroundColor: bgColor , width:wid}}>{BtnName}</button>
    
    </>
  )
}

export default Button