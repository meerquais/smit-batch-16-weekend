import React, { act, useReducer } from 'react'

function Form() {

  const initialState = {
    step:1,
    name:"",
    email:""
  }

  const [state,dispatch] = useReducer(reducer, initialState)

  function reducer(state , action){
    switch(action.type){
      case "next":
        return {
          ...state, step:state.step + 1
        }
      case "prev":
        return {
          ...state, step: state.step - 1
        } 
      case "field":
        return {
          ...state,[action.field]:action.value
        } 
      default:
        return state  
    }
  }




  return (
    <>

      <h2>Multi step form</h2>

      {state.step === 1 && (
        <input type="text" placeholder='Name'
          value={state.name} 
          onChange={(e)=>{
            dispatch({type:"field",field:"name",value:e.target.value})
          }}
        />
      )}
      {state.step === 2 && (
        <input type="text" placeholder='Email'
          value={state.email} 
          onChange={(e)=>{
            dispatch({type:"field",field:"email",value:e.target.value})
          }}
        />
      )}

      <button onClick={()=>{
        dispatch({type:"prev"})
      }}>Back</button>
      <button onClick={()=>{
        dispatch({type:"next"})
      }}>Next</button>

      
    
    </>
  )
}

export default Form