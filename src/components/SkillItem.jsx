import React from 'react'

const SkillItem = ({skill, level}) => {

    const stars = level.map(item => {
        return (
            <div>
                {item}
            </div>
        )
    })


  return (
    <div className='bg-gray-400 flex flex-col h-auto rounded-lg overflow-hidden'>
        <div className='p-6 bg-white'>
            {skill}
        </div>
        <div className='flex flex-row p-4'>
            {stars}
        </div>
        
       
    </div>
  )
}

export default SkillItem