import React from 'react'
import { useNavigate } from 'react-router-dom'

function Login({setIsAuth}) {

  const navigate = useNavigate()

  const handleLogin = ()=>{
    setIsAuth(true);
    navigate("/dashboard")
  }


  return (
    <div>
      
      <h1>Login Page</h1>

      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login