import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  // useEffect(()=>{

  // }, [])

      // useEffect(()=>{
      //     console.log("Component Mounted");
          
      //  }, [])
        // useEffect(()=>{
        //       console.log("Runs on every render");
              
        //      })

  // const [count , setCount] = useState(0);

  //   useEffect(()=>{
  //       console.log("Count changed" , count);
        
  //   },[count])



    // best practice

    // const [users, setUsers] = useState([]);


    // useEffect(()=>{

    //   fetch("https://jsonplaceholder.typicode.com/users")
    //   .then(res => res.json())
    //   .then(data => setUsers(data))


    // },[])


      // galat way

    // const [users, setUsers] = useState([]);

    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then(res => res.json())
    //   .then(data => setUsers(data))




    // const [post , setPosts] = useState([]);

    // useEffect(()=>{
    //   async function fetchData() {
    //     const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    //     const data = await res.json();
    //     setPosts(data);
    //   }



    //   fetchData()
    // }, [])

    // const obj = {
    //   name:"Ali"
    // };

    // useEffect(()=>{
    //   console.log("Runs again and again");
      
    // },[obj])

    // const [count, setCount] = useState(0);

    // useEffect(()=>{
    //   setCount(count + 1)
    //   console.log(count);
      
    // }, [count])


    // useEffect(()=>{

    //   const interval = setInterval(()=>{
    //     console.log("running...");
        
    //   }, 1000);


    //   return()=>{
    //     clearInterval(interval);
    //     console.log("Cleanup Done");
        
    //   };


    // },[])

    const [posts , setPosts] = useState([]);



    useEffect(()=>{
      const controller = new AbortController();


      fetch("https://jsonplaceholder.typicode.com/posts" , {
        signal:controller.signal
      })
      .then(res => res.json())
      .then(data => setPosts(data));


      return()=>{
        controller.abort();
      };

    }, [])



  return (
    <>
      {/* <h1>Hello class!</h1> */}

      {/* <button onClick={()=>{
        setCount(count + 1)
      }}>{count}</button>
      <h1>Hello World!</h1> */}

        {/* {post.map(post => (
          <p key={post.id}>{post.title}</p>
        ))} */}
        <h1>Hello World</h1>



    </>
  )
}

export default App
