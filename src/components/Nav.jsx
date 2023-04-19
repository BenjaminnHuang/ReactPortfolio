import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='bg-gradient-to-br from-white to-white text-transparent bg-clip-text flex-col flex gap-6 p-6 font-Exo'>
        <Link to="/">
            <h1 className='lg:text-5xl md:text-xl text-lg'>Benjamin</h1>
        </Link>

        <ul className='flex-col flex gap-6 lg:text-3xl text-md md:text-lg text-md mt-10'>
            <li className='hover:text-4xl duration-300 max-w-fit'>
                <Link to="/">Intro</Link>
            </li>
            <li className='hover:text-4xl duration-300 max-w-fit'>
                <Link to="/experience">Experience</Link>
            </li>
            <li className='hover:text-4xl duration-300 max-w-fit'>
                <a href="">Skills</a>
            </li>
            <li className='hover:text-4xl duration-300 max-w-fit'>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>

    </nav>
  )
}

export default Nav