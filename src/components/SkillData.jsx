import React from "react";
import {FaReact, FaPython, FaUnity} from "react-icons/fa"
import {IoLogoJavascript, IoLogoCss3, IoLogoHtml5} from "react-icons/io5"
import {SiCsharp, SiCoursera, SiCplusplus, SiTailwindcss} from 'react-icons/si'
import {DiJava} from "react-icons/di"
import {AiOutlineStar, AiTwotoneStar} from 'react-icons/ai'

const noStar = <AiOutlineStar className='text-yellow-400 w-auto h-12'/>
const star = <AiTwotoneStar className='text-yellow-400 w-auto h-12'/>

const reactIcon = <FaReact className="w-auto h-56 rounded-full bg-white p-6 text-blue-500"/>
const csharpIcon = <SiCsharp className="w-auto h-56 rounded-full bg-white p-6 text-blue-700"/>
const jsIcon = <IoLogoJavascript className="w-auto h-56 rounded-full bg-white p-6 text-yellow-400"/>
const cssIcon = <IoLogoCss3 className="w-auto h-56 rounded-full bg-white p-6 text-blue-700"/>
const htmlIcon = <IoLogoHtml5 className="w-auto h-56 rounded-full bg-white p-6 text-orange-600"/>
const javaIcon = <DiJava className="w-auto h-56 rounded-full bg-white p-6 text-orange-800"/>
const cIcon = <SiCoursera className="w-auto h-56 rounded-full bg-white p-6 text-blue-700"/>
const cplusIcon = <SiCplusplus className="w-auto h-56 rounded-full bg-white p-6 text-blue-700"/>
const pythonIcon = <FaPython className="w-auto h-56 rounded-full bg-white p-6 text-yellow-500"/>
const tailwindIcon = <SiTailwindcss className="w-auto h-56 rounded-full bg-white p-6 text-blue-700"/>

const skills = [
    {
        key: 1,
        skill: cplusIcon,
        level: 
        [
            star,
            star,
            star,
            star,
            noStar
        ]
    },
    {
        key: 2,
        skill: javaIcon,
        level: 
        [
            star,
            star,
            star,
            noStar,
            noStar
        ]
    },
    {
        key: 3,
        skill: pythonIcon,
        level: 
        [
            star,
            star,
            star,
            noStar,
            noStar
        ]
    },
    {
        key: 4,
        skill: jsIcon,
        level: 
        [
            star,
            star,
            star,
            star,
            noStar
        ]
    },
    {
        key: 5,
        skill: htmlIcon,
        level: 
        [
            star,
            star,
            star,
            star,
            noStar
        ]
    },
    {
        key: 6,
        skill: cssIcon,
        level: 
        [
            star,
            star,
            star,
            noStar,
            noStar
        ]
    },
    {
        key: 7,
        skill: csharpIcon,
        level: 
        [
            star,
            star,
            star,
            noStar,
            noStar
        ]
    },
    {
        key: 8,
        skill: tailwindIcon,
        level: 
        [
            star,
            star,
            star,
            star,
            noStar
        ]
    },
    {
        key: 9,
        skill: reactIcon,
        level: 
        [
            star,
            star,
            star,
            star,
            noStar
        ]
    }
]

export default skills