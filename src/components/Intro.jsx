import React from 'react'
import '/src//tailwind.css'
import Nav from '/src/components/Nav'

const Intro = () => {
  return (


    <div className='w-screen h-screen bg-gray-800 text-gray-100'>
      <Nav/>
      <div className='mt-36 mx-4 flex flex-col h-auto lg:flex-row justify-evenly items-center bg-gray-800'>
        <div className='flex flex-col items-center'>
          <img src="../assets/selfie.png" className='rounded-full border-4 border-indigo-400 w-2/5 grayscale hover:grayscale-0 duration-500 shadow-xl lg:w-4/5 md:w-3/5'/>
          <h1 className='text-xl mt-4 font-Kanit lg:text-3xl md:text-2xl'>Hung-I Huang (Benjamin)</h1>
          <p className='font-semibold text-lg lg:text-2xl md:text-xl'>Web Developer & Software Engineer</p>
        </div>

        <div className='sm:md md:text-xl mt-4 md:w-4/5 lh-auto lg:w-2/5 p-6 font-Kanit lg:text-3xl leading-relaxed hover:bg-slate-700 duration-300 rounded-lg'>
          I am a upcoming graduated student from UCSD with a Mathematics-ComputerScience bachelor degree. I see programming as a tool
          that solves complex problems and make our life easier for us. I like to build things that are playable and visible. So I enjoy
          makeing websites and games as my side projects. I am also a musician who knows singing, guitar and piano!!  
        </div>
      </div>
    </div>
  )
}

export default Intro