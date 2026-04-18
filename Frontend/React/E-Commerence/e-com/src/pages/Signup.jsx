import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { signupUser } from '../features/auth/authSlice'

function Signup() {
  const [email, setEmail] = useState("");
  const [password , setPassword] = useState("")
  const dispatch = useDispatch();


  return (
    <>
    
      <div className='p-6'>
        <input type="text" className='border o-2 block mb-2' placeholder='Email'
          onChange={(e)=>{
            setEmail(e.target.value)
          }}/>
           <input type="password" className='border o-2 block mb-2' placeholder='Password'
          onChange={(e)=>{
            setPassword(e.target.value)
          }}/>

          <button className='bg-blue-500 text-white px-3 py-1' onClick={()=>{
            dispatch(signupUser({email,password}))
          }}>Signup</button>
          
         

      </div>
    
    
    
    
    </>
  )
}

export default Signup