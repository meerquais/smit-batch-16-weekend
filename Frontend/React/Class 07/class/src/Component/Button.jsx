import React from 'react'

function Button({text , onClick , color}) {
  return (
    <div>

      <button 
      onClick={onClick}
      style={{ color: color, fontSize: "16px" }} 
      
      
      
      >{text}</button>

    </div>
  )
}

export default Button