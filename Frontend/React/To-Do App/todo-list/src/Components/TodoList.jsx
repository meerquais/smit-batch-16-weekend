import React from 'react'
import TodoItem from './TodoItem'

function TodoList({todos , deleteTodo , toggleComplete, editTodo}) {
  return (
    <>

    <div>
      {todos.length === 0 && <p>No Todos Yet</p>}

      {todos.map((todo)=>(
        <TodoItem key={todo.id}  todo={todo} deleteTodo={deleteTodo}  toggleComplete={toggleComplete} editTodo={editTodo}  />
      ))}






    </div>


    </>
  )
}

export default TodoList