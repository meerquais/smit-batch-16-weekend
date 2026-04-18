import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './Components/Dashboard';
import Login from './Components/Login';
import Page from './Components/Page';
import Card from './Components/Card';
import Demo from './Components/Demo';

function App({active}) {

  // useEffect(()=>{
  //   console.log("Effect Run!");
    
  // }, [])
  
    // const users = ["Ali" , "Hafeez" , "Minhaj" , "Meer"];

    // let isLoggedIn = true;

    // const user = "Meer";

    const items = ["Apple" , "Mango" , "Banana" , "Orange"];


  return (
    <>
      
     {/* <h1 style={{color:"red" , fontSize:"40px"}}>Hello World!</h1> */}

     {/* <div style={{backgroundColor: active ? "green" : "gray"}}>Box</div> */}


     {/* {users.map(user => (
      <p key={user} >{user}</p>)
     )} */}

      {/* {isLoggedIn && <p>Welcome</p>} */}

      {/* {isLoggedIn ? <Dashboard /> : <Login />} */}

      {/* <Dashboard /> */}

      {/* <Page user={user} /> */}

      {/* <Card>
        <h2>Title</h2>
        <p>Desc</p>
      </Card> */}


        {/* {items.map((item,index) =>(
          <li key={index}>{item}</li>
        ))} */}

        <Demo />


    </>
  )
}

export default App
