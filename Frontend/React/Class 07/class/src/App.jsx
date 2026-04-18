import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import User from './Component/User';
import Card from './Component/Card';
import Layout from './Component/Layout';
import Button from './Component/Button';
import Form from './Component/Form';

function App() {
 
  // let count = 0;

  // function add(){
  //   count++
  //   console.log(count);
    
  // }
    // const [age , setAge] = useState(20)

    // const age = 20;


    function add(){
      console.log("Add");
      
    }
    function remove(){
      console.log("Remove");
      
    }

  // const [count , setCount] = useState(0)

  return (
    <>
      {/* <p>{count}</p>
      <button onClick={()=>{
        setCount(count + 1)
      }}>+</button> */}

      {/* <User age={age} />
    
      <Card>
        <h2>Title</h2>
        <p>text</p>
      </Card> */}

        {/* <Layout 
          header={<h1>Home</h1>}
          body={<p>Welcome</p>}
        /> */}

        {/* <Button text={"Submit"} onClick={add} />
        <Button text={"Login"} onClick={remove} color={"red"} /> */}

          <Form />



    </>
  )
}

export default App
