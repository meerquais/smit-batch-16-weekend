import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Button from './component/Button'
import Card from './component/Card'
import Skills from './component/Skills'


function App() {

  const skills = ["React" ,"Firebase", "JavaScript" ,"Github", "Bootstrap" , "CSS" , "HTML" ]
 

  return (
    <>
      {/* <Button BtnName="Buy" />
      <Button BtnName="Sell" />
      <Button bgColor='blue' wid='50px' /> */}

      {/* <Card>
        <h2>Hello</h2>
        <p>This is going to be shown inside card</p>
        </Card> */}
      {/* <Skills skills={skills} /> */}

        <Skills skills={skills} />

    </>
  )
}

export default App
