import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginUser } from '../features/auth/authSlice'
import { Link } from 'react-router-dom'

function Login() {
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
            dispatch(loginUser({email,password}))
          }}>Login</button>
          
          <p>No Account? <Link to='/signup'>Signup</Link></p>

      </div>
    
    
    
    
    </>
  )
}

export default Login