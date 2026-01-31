import React from 'react'

function Skills({skills}) {
  return (
    <>
    
      <ul>
        {skills.map((skill)=>(
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    
    </>
  )
}

export default Skills