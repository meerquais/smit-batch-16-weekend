import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { AuthContext } from '../context/AuthContext';

function Navbar() {

  const {theme , toggleTheme} = useContext(ThemeContext);
  const {user , login , logout} = useContext(AuthContext);



  return (
    <>

    <div style={{background: theme === "light" ? "#eee" : "#333", padding: "10px"}}>
      <h1>Theme: {theme}</h1>
      <button onClick={toggleTheme} >Toggle Theme</button>
    </div>

    <hr />

    {user ? (
      <>
      <p>Welcome {user.name}</p>

      <button onClick={logout}>Logout</button>
      </>
    ): (
      <button onClick={login}>Login</button>
    )}


    </>
  )
}

export default Navbar