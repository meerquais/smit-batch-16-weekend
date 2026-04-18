import { useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoList from './Component/TodoList'
import Cart from './Component/Cart'
import Form from './Component/Form'
import { Route, Routes } from 'react-router-dom'

function App() {

  // const initialState = {

  // }

  // const [state, dispatch]= useReducer(reducer, initialState)

  // function reducer(state,action){
  //   // logic
  // }

//  const initialState = {
//     count:0
//   };


  // const [state, dispatch] = useReducer(reducer, initialState);


 
  // function reducer(state , action){
  //   switch(action.type){
  //     case "increase":
  //       return {
  //         count: state.count + 1
  //       };
  //       case "decrease":
  //         return {
  //           count: state.count - 1
  //         };
  //         case "reset":
  //           return initialState;
  //         default:
  //           return state
  //   }
  // }




  

  return (
    <>
      {/* <h1>Counter</h1>
      <p>{state.count}</p>

      <button onClick={()=>{
        dispatch({type:"increase"})
      }} >+</button>
      <button onClick={()=>{
        dispatch({type:"decrease"})
      }} >-</button>
      <button onClick={()=>{
        dispatch({type:"reset"})
      }} >Reset</button> */}

        {/* <TodoList /> */}
        {/* <Cart /> */}
        {/* <Form /> */}

        <Routes>

          <Route   path='/cart' element={ <Cart />}   />
          <Route   path='/form' element={ <Form />}   />
          <Route   path='/todo' element={ <TodoList />}   />

        </Routes>


    </>
  )
}

export default App
