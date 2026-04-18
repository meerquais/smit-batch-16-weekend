import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Hello from './components/Hello'
import Welcome from './components/Welcome'
import Message from './components/Message'
import Age from './components/Age'
import User from './components/User'
import Status from './components/Status'
import Button from './components/Button'
import Profile from './components/Profile'
import Skills from './components/Skills'


function App() {


  // const list = [
  //   {
  //     title:"react",
  //     url:"https://facebook.github.io/react/",
  //     author:"Jordan Walke",
  //     num_comments:3,
  //     points:4,
  //     objectID:0,
  //   },
  //   {
  //     title:"Redux",
  //     url:"https://github.com/reactjs/redux",
  //     author:"Dan Abramov , Andrew Clark",
  //     num_comments:2,
  //     points:5,
  //     objectID:1,
  //   },
  // ]
 
  const items = ['Apple' , 'Mango' , 'Banana'];

  // function add(a,b){
  //   return a + b
  // }


  // console.log(add(2,3));

  // function getAge(year){
  //   return 2026 - year
  // }

  // console.log(getAge(27));

  // function add(a , b){

  // }
  

  // function handleClick(){
  //   alert("Button Clicked!");
  // }

  // function handleClick2(){
  //   alert("2nd Button Clicked!");
  // }

  const user = {
    name:"Meer",
    age:26
  }
  const skills = ["Html" , "Css" , "Bootstrap","Github" , "JavaScript" , "Firebase" , "React"]



  return (
    <>
      {/* <div className='App'>
        {list.map(item =>  (
          <div key={item.objectID}>
            <span> <a href={item.url}>{item.title}</a> </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
            </div>
        ))}
      </div> */}

    {/* <Hello />
    <Welcome />
    <Message /> */}

    {/* <Message name="Ali" age={20} />
    <Message name="Meer" age={26} /> */}

    {/* <ul>
      {items.map(item => (
        <li key={item}>{item}</li>
      ))}
    </ul> */}
    {/* <Welcome name="Hafeez" />
    <Age age={34} /> */}
    
    {/* <User name="Meer" city="Karachi" />
    <Status isOnline={false} />

    <Button onClick={handleClick} />
    <Button onClick={handleClick2} /> */}

    {/* <Profile user={user} /> */}

    <Skills skills={skills} />

    </>
  )
}

export default App
