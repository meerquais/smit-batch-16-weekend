import React from 'react'
import { useSelector , useDispatch } from "react-redux";
import { logoutUser } from "../features/auth/authSlice";
import { Link } from "react-router-dom";



function Navbar() {

  const {user} = useSelector((s) => s.auth);
  const dispatch = useDispatch;


  return (
    <>

      <div className='bg-blue-600 text-white p-4 flex justify-between'>
        <div className='flex gap-4'> 

          <Link to="/" >Home</Link>

          {user && <Link to="/cart">Cart</Link>}
          {user?.email === "admin@gmail.com" && (
            <Link to="/admin">Admin</Link>
          )}
        </div>

          {user && (
            <button onClick={()=>{
              dispatch(logoutUser())
            }}>Logout</button>
          )}



      </div>

    
    </>
  )
}

export default Navbar