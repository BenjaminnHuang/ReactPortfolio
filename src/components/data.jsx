import React from "react"
import {FaReact} from "react-icons/fa"
import {IoLogoJavascript, IoLogoCss3, IoLogoHtml5} from "react-icons/io5"

const reactIcon = <FaReact  className="w-auto h-16 rounded-full bg-white p-2 text-blue-500"/>
const cssIcon = <IoLogoCss3 className="w-auto h-16 rounded-full bg-white p-2 text-blue-700"/>
const htmlIcon = <IoLogoHtml5 className="w-auto h-16 rounded-full bg-white p-2 text-orange-600"/>
const jsIcon = <IoLogoJavascript className="w-auto h-16 rounded-full bg-white p-2 text-yellow-400"/>

const data = [
    {
    key: 1,
    img: '../assets/selfie.png',
    title: 'MoodTracker',
    description: 'This is a CRUD website that gives the user the ability to write down their notes and mood on the specific date.',
    link: 'sdsdsdsdsd,',
    languages: [
        reactIcon, 
        cssIcon,
        htmlIcon,
        jsIcon
    ]
    },
    {
        key: 2,
        img: '../assets/selfie.png',
        title: 'MoodTracker',
        description: 'This is a CRUD website that gives the user the ability to write down their notes and mood on the specific date. The motivation is to encourage people to take care of their mental status in this modern society.',
        link: 'sdsdsdsdsd,',
        languages: [
            htmlIcon,
            jsIcon
        ]
    },
    {
        key: 3,
        img: '../assets/selfie.png',
        title: 'MoodTracker',
        description: 'This is a CRUD website that gives the user the ability to write down their notes and mood on the specific date. The motivation is to encourage people to take care of their mental status in this modern society.',
        link: 'sdsdsdsdsd,',
        languages: [
            htmlIcon,
            jsIcon
        ]
    },
    {
        key: 4,
        img: '../assets/selfie.png',
        title: 'MoodTracker',
        description: 'This is a CRUD website that gives the user the ability to write down their notes and mood on the specific date. The motivation is to encourage people to take care of their mental status in this modern society.',
        link: 'sdsdsdsdsd,',
        languages: [
            htmlIcon,
            jsIcon
        ]
    },
]

export default data