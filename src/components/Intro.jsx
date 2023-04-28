import React from 'react'
import '/src//tailwind.css'
import Nav from '/src/components/Nav'

const Intro = () => {
  return (

    <div className='h-screen bg-gray-800'>
      <div className='h-auto bg-gray-800 text-gray-100 flex'>
        <Nav/>
        <div className=' mt-24 mx-4 flex flex-col h-auto justify-center items-center md:gap-4'>
          <div className='flex flex-col items-center'>
            <img src="../assets/selfie.png" className='rounded-full border-4 
             border-indigo-400 w-1/6 grayscale hover:grayscale-0 duration-500 shadow-xl lg:w-2/5 md:w-1/5'/>

            <h1 className='text-xl mt-4 font-Kanit lg:text-3xl md:text-2xl'>Hung-I Huang (Benjamin)</h1>
            <p className='font-semibold text-lg lg:text-2xl md:text-xl'>Web Developer & Software Engineer</p>
          </div>

          <div className=' md:text-xl mt-4 w-full text-start md:w-4/5 h-auto lg:w-3/5 p-6 font-Kanit lg:text-3xl tracking-wider leading-relaxed hover:bg-slate-700 duration-300 rounded-lg'>
          I’m Benjamin (Hung-I) Huang, a Web Developer and Software Engineer who graduated from UCSD and is currently based in the Bay Area. I places a high value on programming
           as a tool that can create engaging digital user experiences, and create intuitive websites for people to navigate through the tech world. I specializes in building interactive 
           websites, programming, and game design.  
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intro