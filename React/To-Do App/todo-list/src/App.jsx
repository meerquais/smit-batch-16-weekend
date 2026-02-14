import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import TodoInput from './Components/TodoInput';
import TodoList from './Components/TodoList';


function App() {
  const [todos , setTodos] = useState([]);

  const addTodo = (text)=>{
    if(text.trim() === "") return;

    setTodos([
      ...todos,
      {
        id: Date.now(),
        text,
        completed:false
,      }
    ])

  }


  const deleteTodo = (id)=>{
    setTodos(todos.filter((todo)=>{
       return todo.id !== id
    }))
  };

  const toggleComplete = (id)=>{
    setTodos(
      todos.map((todo)=> todo.id === id ? { ...todo, completed: !todo.completed} : todo)
    );
  };


  const editTodo = (id, newText) => {
     setTodos(
      todos.map((todo)=> todo.id === id ? {...todo , text: newText} : todo)
     );
  };

  return (
    <>

    <div>
      <h1>Todo App</h1>

      <TodoInput  addTodo={addTodo}  />
      <TodoList todos={todos} deleteTodo={deleteTodo}
        editTodo={editTodo} toggleComplete={toggleComplete}
      />

    </div>


      
    </>
  )
}

export default App
