import React from 'react'

function Message(props) {
  const text = 'React is fun';
  return (
   <>
    <p>{text}</p>
    <p>Name : {props.name}</p>
    <p>Age : {props.age}</p>
   
   </>
  )
}

export default Message