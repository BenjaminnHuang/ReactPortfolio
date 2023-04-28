import React from 'react'
import Nav from './Nav'
import SkillItem from './SkillItem'
import data from './SkillData'

const Skills = () => {

  const skillset = data.map(item=>{
    return (
      <SkillItem
        key={item.key}
        skill={item.skill}
        level={item.level}
      />
    )
  })

  return (
    <div className='bg-gray-800 h-auto flex'>
      <Nav/>
      <div className='mt-36 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mx-auto gap-20'>
        {skillset}
      </div>
    </div>
  )
}

export default Skills