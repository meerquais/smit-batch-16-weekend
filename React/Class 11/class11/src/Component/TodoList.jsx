import React, { useReducer, useState } from 'react'

function TodoList() {

  const initialState = {
    todos:[]
  };

  const [state , dispatch] = useReducer(reducer, initialState)
  const [input, setInput] = useState("");


  function reducer(state , action){

    switch(action.type){
      case "add":
        return {
          todos: [...state.todos , {
            id:Date.now(),
            text:action.payload
          }]
        };
      case "delete":
        return {
          todos: state.todos.filter(t => t.id !== action.payload)
        };
      default:
        return state;
    }
    
  }




  return (
    <>

      <h2>Todo App</h2>

      <input type="text"
        value={input}
        onChange={(e)=>{
          setInput(e.target.value)
        }}
      />

        <button onClick={()=>{
          dispatch({type:"add", payload:input})
          setInput("")
        }} >Add</button>


        {state.todos.map(todo => (
          <div key={todo.id}>
            {todo.text}

            <button onClick={()=>{
              dispatch({type:"delete", payload:todo.id})
            }}>Delete</button>
          </div>
        ))}



    
    
    </>
  )
}

export default TodoList