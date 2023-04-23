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
      />
    )
  })
  
  return (
    <div className='bg-gray-800 h-auto flex flex-row'>
      <Nav/>
      
      <div className='flex flex-col m-auto mt-20'>
        {project}
      </div>

      
    </div>
  )
}

export default Experience