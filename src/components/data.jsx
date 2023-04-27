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
    img: '../assets/reflect.png',
    vid: '',
    title: 'MoodTracker',
    description: 'This is a CRUD website that gives the user the ability to write down their notes and mood on the specific date.',
    link: 'https://benjaminnhuang.github.io/MoodTracker/source/hello-page/home-page.html',
    languages: [
        reactIcon, 
        cssIcon,
        htmlIcon,
        jsIcon
    ]
    },
    {
        key: 2,
        img: '',
        vid: '../assets/Tetris.mp4',
        title: 'Tetris',
        description: 'This is a CRUD website that gives the user the ability to write down their notes and mood on the specific date.',
        link: '',
        languages: [
            htmlIcon,
            jsIcon
        ]
    },
    {
        key: 3,
        img: '',
        vid: '../assets/SnakeGame.mp4',
        title: 'SnakeGame',
        description: 'This is a CRUD website that gives the user the ability to write down their notes and mood on the specific date.',
        link: 'https://github.com/BenjaminnHuang/SnakeGame',
        languages: [
            htmlIcon,
            jsIcon
        ]
    },
    {
        key: 4,
        img: '',
        vid: '../assets/PongGame.mp4',
        title: 'PongGame',
        description: 'This is a CRUD website that gives the user the ability to write down their notes and mood on the specific date.',
        link: 'https://github.com/BenjaminnHuang/PongGame',
        languages: [
            htmlIcon,
            jsIcon
        ]
    },
]

export default data