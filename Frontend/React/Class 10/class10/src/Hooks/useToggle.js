import React, { useState } from 'react'

function useToggle(initialValue = false) {

  const [value , setValue] = useState();

  const toggle = ()=>{
    setValue((prev)=> !prev)
  };


  return [value , toggle]
  
  
}

export default useToggle