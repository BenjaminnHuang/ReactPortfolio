import React from 'react'
import { Link } from 'react-router-dom'
import Footer from "./Footer"

const Nav = () => {
  return (
    <nav className='bg-gradient-to-br from-white to-white text-transparent bg-clip-text w-20 md:w-36 lg:w-60 h-auto flex-col flex gap-6 p-6 font-Exo'>
        <Link to="/">
            <h1 className='lg:text-5xl md:text-xl text-lg'>Benjamin</h1>
        </Link>

        <ul className='flex-col flex gap-6 lg:text-3xl text-sm md:text-lg mt-10'>
            <li className='lg:hover:text-4xl md:hover:text-xl duration-300 max-w-fit'>
                <Link to="/">Intro</Link>
            </li>
            <li className='lg:hover:text-4xl md:hover:text-xl duration-300 max-w-fit'>
                <Link to="/projects">Projects</Link>
            </li>
            <li className='lg:hover:text-4xl md:hover:text-xl duration-300 max-w-fit'>
                <Link to="/skills">Skills</Link>
            </li>
            <li className='lg:hover:text-4xl md:hover:text-xl duration-300 max-w-fit'>
                <Link to="/contact">Contact</Link>
            </li>
            <li className='lg:hover:text-4xl md:hover:text-xl duration-300 max-w-fit'>
                <a href="../assets/Resume.pdf" target="_blank">Resume</a>
            </li>
        </ul>

        <div className='ml-0 mt-10 md:mt-24 lg:ml-2 md:ml-1'>
            <Footer/>
        </div>

    </nav>
  )
}

export default Nav