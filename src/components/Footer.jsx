import React from 'react'
import {FaReact, FaUnity} from "react-icons/fa"
import {IoLogoJavascript, IoLogoHtml5} from "react-icons/io5"
import {SiTailwindcss} from "react-icons/si"

const Footer = () => {

  const reactIcon = <FaReact  className=" w-8 h-auto lg:w-16 md:w-10 rounded-full bg-white p-1 lg:p-2 text-blue-500"/>
  const tailwindIcon = <SiTailwindcss className="w-8 h-auto p-1 lg:w-16 md:w-10 rounded-full bg-white lg:p-2 text-blue-700"/>
  const htmlIcon = <IoLogoHtml5 className="w-8 h-auto p-1 lg:w-16 md:w-10 rounded-full bg-white lg:p-2 text-orange-600"/>
  const jsIcon = <IoLogoJavascript className="w-8 h-auto p-1 lg:w-16 md:w-10 rounded-full bg-white lg:p-2 text-yellow-400"/>

  return (
    <div className='flex flex-col gap-6 h-auto'>
      {reactIcon}
      {tailwindIcon}
      {htmlIcon}
      {jsIcon}
    </div>
  )
}

export default Footer