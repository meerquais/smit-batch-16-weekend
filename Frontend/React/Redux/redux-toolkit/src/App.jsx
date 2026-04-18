// import React from 'react'
// import { useSelector , useDispatch } from 'react-redux'
// import { increment , decrement } from './features/counter/counterSlice'

// function App() {

//   const count = useSelector(state => state.counter.value)
//   const dispatch = useDispatch()

//   return (
//     <div>

//       <h1>{count}</h1>
//       <button onClick={()=>{
//         dispatch(increment())
//       }} >+</button>
//       <button onClick={()=>{
//         dispatch(decrement())
//       }} >-</button>
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import { useSelector , useDispatch } from 'react-redux'
// import { addByAmount } from './features/payloadcounter/counterSlice'

// function App() {

//   const count = useSelector(state => state.counter.value);
//   const dispatch = useDispatch();
//   return (
//     <div>

//     <h1>{count}</h1>

//     <button onClick={()=>{
//       dispatch(addByAmount(5))
//     }}>Add 5</button>
//     <button onClick={()=>{
//       dispatch(addByAmount(10))
//     }}>Add 10</button>
//     <button onClick={()=>{
//       dispatch(addByAmount(50))
//     }}>Add 50</button>
//     <button onClick={()=>{
//       dispatch(addByAmount(100))
//     }}>Add 100</button>

//     </div>
//   )
// }

// export default App

// import React, { useState } from 'react'
// import { useSelector , useDispatch } from 'react-redux'
// import { addTodo , deleteTodo } from './features/todo/todoSlice';


// function App() {

//   const [text,setText] = useState("");
//   const todos = useSelector(state => state.todos);
//   const dispatch = useDispatch();

//   return (
//     <>

//     <input type="text" onChange={e=> setText(e.target.value)} />
//     <button onClick={()=>{
//       dispatch(addTodo({id:Date.now(), text}))
//     }}>Add</button>

//     {todos.map(todo =>(
//       <div key={todo.id}>
//         {todo.text}
//         <button onClick={()=>{
//           dispatch(deleteTodo(todo.id))
//         }} >Remove/Delete</button>
//       </div>
//     ))}
    
    
    
    
    
//     </>
//   )
// }

// export default App


import React from 'react'
import Navbar from './components/Navbar'
import Products from './components/Products'
import Cart from './components/Cart'

function App() {
  return (
   <>

    <Navbar />
    <Products />
    <Cart />
   
   </>
  )
}

export default App