import React, { useState } from 'react'

function TodoInput({addTodo}) {

  const [input , setInput] = useState("");


  const handleAdd = () =>{
    addTodo(input);
    setInput("");
  }


  return (
    <>

      <input type="text" placeholder='Enter Todo' value={input}
        onChange={(e)=>{
          setInput(e.target.value)
        }}
      />
      <button onClick={handleAdd}>Add</button>
    
    
    
    </>
  )
}

export default TodoInput