import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Child from './Components/Child';
function App() {
 
  // const [count, setCount] = useState(0)

  // const [index , setIndex] = useState(0)

  // const [text , setText] = useState("test");
  // const [on , setOn] = useState(false);

  // const [user, setUser] = useState({name: "Ali"});

  // const [items , setItems] = useState([]);

  // const [ show , setShow] = useState(true);

  // function getData(data){
  //   console.log(data);
  // }

  // const [text , setText] = useState("");

  // function handleClick(){
  //   alert("Button Clicked!");
  // }
    // function showName(name){
    //   alert(name)
    // }

    // function handleChange(e){
    //   console.log(e.target);
    //   console.log(e.target.value);
      
    // }

    // function handleKey(e){
    //   console.log(e.key);
      
    // }


      // const [disable , setDisable] = useState(false);

      // const [name , setName] = useState("");
      // console.log(name);

      // function handleSubmit(e){
      //   e.preventDefault();
      //   alert("Form Submitted");
      // }

      // const [name , setName] = useState("");

      // function submit(e){
      //   e.preventDefault();
      //   console.log(name);
        
      // }

      // const [data , setData] = useState({
      //   name: "",
      //   email: ""
      // });

      const [name , setName] = useState("");
      

  return (
    <>
      <div>


      {/* <button onClick={()=> setCount(count + 1)} >{count}</button> */}
      {/* <p onClick={()=>{
        setIndex(index + 1)
        }}>{index}</p> */}

        {/* <input type="text" value={text} onChange={(e)=>{
            setText(e.target.value)
            
            
            }} /> */}


        {/* <button onClick={()=>{
          setOn(!on)
          }}>{on ? "ON" : "OFF"}</button> */}


        {/* <button onClick={()=>{
          setUser({name:"Meer"})
          }} >{user.name}</button> */}

        {/* <button onClick={()=>{
          setItems([...items , "New"])
          }}>Add</button> */}



        {/* <button onClick={()=>{
          setShow(!show)
          }} >{show && "Hello"}</button> */}

        {/* <Child send={getData} /> */}

        {/* <h2>{text}</h2>

<Child send={setText} /> */}

          {/* <button onClick={handleClick} >Click</button> */}
          {/* <button onClick={()=>{
            alert("Clicked!")
            }} >Click</button> */}

          {/* <button onClick={()=>{
            showName("Meer")
            }}>Show Name</button> */}

          {/* <input type="text" onChange={handleChange} /> */}

          {/* <input type="text" onKeyDown={handleKey} /> */}
          {/* <button onClick={()=>{
            setDisable(true)
            }} disabled={disable} >Click Once</button> */}
            </div>
    

    {/* <input type="text" value={name} onChange={(e)=>{
      setName(e.target.value)
    }} /> */}

    {/* <form onSubmit={handleSubmit}>
      <button>Submit</button>
    </form> */}

    {/* <form onSubmit={submit}>
      <input type="text" onChange={(e)=>{
        setName(e.target.value)
      }} />

      <button>Send</button>
    </form> */}

    {/* <input type="text" onChange={(e)=>{
      setData({...data, name:e.target.value})
    }} />
    <input type="text" onChange={(e)=>{
      setData({...data , email:e.target.value})
    }} />
    
    <p>{data.name}</p>
    <p>{data.email}</p> */}


    <input type="text" onChange={(e)=>{
      setName(e.target.value)
    }} />
    <button disabled={!name}>Submit</button>
    
    </>
  )
}

export default App
