import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import useToggle from './Hooks/useToggle'
import useCounter from './Hooks/useCounter'
import useLocalStorage from './Hooks/useLocalStorage'
// import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  // const myRef = useRef(initialValue);

  // myRef.current


  // const inputRef = useRef(null);
  // const prevCountRef = useRef(0);

  // const [count , setCount] = useState(0);

  // useEffect(()=>{
  //   prevCountRef.current = count;
  // }, [count]);

  // const focusInput = ()=>{
  //   inputRef.current.focus();
  // };

    // const [isOpen , toggleOpen] = useToggle(false);

    // const {count , increment , decrement,reset} = useCounter(10);

    const [name , setName] = useLocalStorage("username", "")
    const [age , setAge] = useLocalStorage("age", 18)

  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}

      {/* <h1>Hello World!</h1>

      <div>
        <h2>useRef</h2>

        <input type="text" ref={inputRef} placeholder='type here..' />
        <button onClick={focusInput} >Focus input</button>

        <hr />

        <h3>Counter</h3>

        <p>Current: {count}</p>
        <p>Previous: {prevCountRef.current}</p>

        <button onClick={()=>{
          setCount(count + 1)
        }}>Increase</button>


      </div> */}


      {/* <div style={{padding:20}}>

      <h2>useToggle</h2>

      <button onClick={toggleOpen}>{isOpen ? "Close" : "Open"}</button>

      {isOpen && <p>Modal Content Vsible</p>}

      </div> */}


      {/* <div>
        <h2>useCounter</h2>

        <p>count: {count}</p>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={reset}>Reset</button>

      </div> */}

      <div>
        <h2>useLocalStorage</h2>

        <input type="text" value={name} onChange={(e)=>{
          setName(e.target.value)
        }} />

        <input type="number" value={age} onChange={(e)=>{
          setAge(e.target.value)
        }} />


        <p>Saved Name : {name}</p>
        <p>Saved age : {age}</p>


      </div>

    
    
    
    
    </>
  )
}

export default App
