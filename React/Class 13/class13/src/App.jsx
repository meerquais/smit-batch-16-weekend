import { useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'

function App() {
  
  // // syntax
  // const memoizedValue = useMemo(()=>{
  //   return expensiveCalculation()
  // } , [dependencies])

  // const [num , setNum] = useState(0);
  // const [text , setText] = useState("");


  // const slowFunction = (n) => {
  //   console.log("Running....");;

  //   for(let i = 0; i < 10000000; i++){}
  //   return n * 2;
    
  // }

  // const result = useMemo(()=>{
  //   slowFunction(num)
  // }, [num])

  


  // const styles = useMemo(()=>{
  //   return {
  //     color: theme === "dark" ? "white" : "black"
  //   };
  // } , [theme])

  // createContext()

  // const MyContext = createContext(defaultValue)


  return (
    <>


{/*     
     <h1>{result}</h1>
     <button onClick={()=>{
      setNum(num + 1)
     }} >Increase</button>
     <input type="text" onChange={(e)=>{
      setText(e.target.value)
     }} /> */}


     {/* <div style={styles}>
      Hello
     </div> */}


      <div>
        <Navbar />
        <Dashboard />
      </div>


    </>
  )
}

export default App
