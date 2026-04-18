import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

function Dashboard({setIsAuth}) {


  const navigate = useNavigate()


  const handleLogout = ()=>{
    setIsAuth(false);
    navigate("/login")
  }


  return (
    <div>

      <nav>
        <Link to="profile">Profile</Link>
        <br />
        <Link to="settings">Settings</Link>

      </nav>

      <hr />


      <Outlet />


      <button onClick={handleLogout}>Logout</button>



    </div>
  )
}

export default Dashboard