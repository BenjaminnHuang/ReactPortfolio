import React from 'react'
import Nav from './Nav'
import data from './data'
import ProjectItems from './ProjectItems'

const Experience = () => {

  const project = data.map(item=>{
    return (
      <ProjectItems
        key={item.key}
        image={item.img}
        link={item.link}
        description={item.description}
        title={item.title}
        languagues={item.languages}
        vid = {item.vid}
      />
    )
  })
  
  return (
    <div className='bg-gray-800 h-auto flex flex-row'>
      <Nav/>
      
      <div className='grid grid-cols-1 md:grid-cols-2 gap-20 m-auto mt-10'>
        {project}
      </div>

      
    </div>
  )
}

export default Experience