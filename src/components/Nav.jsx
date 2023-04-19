import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='bg-gray-600 text-green-500 h-auto flex justify-between items-center font-Kanit font-semibold'>
        <Link to="/">
            <h1 className='lg:text-3xl m-4 pl-6 md:text-xl text-lg'>Welcome</h1>
        </Link>

        <ul className='flex gap-2 md:gap-4 lg:gap-8 lg:text-xl text-md md:text-lg text-md mx-5'>
            <li>
                <Link to="/">Intro</Link>
            </li>
            <li>
                <Link to="/experience">Experience</Link>
            </li>
            <li>
                <a href="">Skills</a>
            </li>
            <li>
                <a href="">Contact</a>
            </li>
        </ul>

    </nav>
  )
}

export default Nav