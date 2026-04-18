import React, { useState } from 'react'

function TodoItem({todo , deleteTodo , toggleComplete , editTodo}) {

  const [isEditing , setIsEditing] = useState(false);

  const [editText , setEditText] = useState(todo.text);

  const handleSave = ()=>{
    editTodo(todo.id, editText);
    setIsEditing(false);
  };



  return (
    <>
      <input type="checkbox" checked={todo.completed} onChange={()=>{toggleComplete(todo.id)}} />
    

      {isEditing ? (
        <input type='text' value={editText} onChange={(e)=>{
          setEditText(e.target.value)
        }} />
      ) : (

          <span className={todo.completed ? "done" : ""}>{todo.text}</span>)}

        {isEditing ? (
          <button onClick={handleSave}>Save</button>
        ) : (
          <button onClick={()=>{
            setIsEditing(true)
          }}>Edit</button>
        )}

        <button onClick={()=>{
          deleteTodo(todo.id)
        }}>Delete</button>
    
    
    </>
  )
}

export default TodoItem