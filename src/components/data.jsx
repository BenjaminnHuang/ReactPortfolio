import React from "react"
import {FaReact, FaUnity} from "react-icons/fa"
import {IoLogoJavascript, IoLogoCss3, IoLogoHtml5} from "react-icons/io5"
import {SiCsharp} from 'react-icons/si'

const reactIcon = <FaReact  className="w-auto h-16 rounded-full bg-white p-2 text-blue-500"/>
const cssIcon = <IoLogoCss3 className="w-auto h-16 rounded-full bg-white p-2 text-blue-700"/>
const htmlIcon = <IoLogoHtml5 className="w-auto h-16 rounded-full bg-white p-2 text-orange-600"/>
const jsIcon = <IoLogoJavascript className="w-auto h-16 rounded-full bg-white p-2 text-yellow-400"/>
const csharpIcon = <SiCsharp className="w-auto h-16 rounded-full bg-white p-2 text-blue-700"/>
const unityIcon = <FaUnity className="w-auto h-16 rounded-full bg-white p-2 text-black"/>

const data = [
    {
    key: 1,
    img: '../assets/reflect.png',
    vid: '',
    title: 'MoodTracker',
    description: 'This is a CRUD website that gives the user the ability to write down their notes and mood on the specific date.',
    link: 'https://benjaminnhuang.github.io/MoodTracker/source/hello-page/home-page.html',
    languages: [
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
        description: 'Remade of a classic game called Tetris. Getting score by eliminating the lines.',
        link: '',
        languages: [
            csharpIcon,
            unityIcon
        ]
    },
    {
        key: 3,
        img: '',
        vid: '../assets/SnakeGame.mp4',
        title: 'SnakeGame',
        description: 'Remade of a classic game called SnakeGame. Player reaches higher point by getting the fruit block without hitting themselves or the walls.',
        link: 'https://github.com/BenjaminnHuang/SnakeGame',
        languages: [
            csharpIcon,
            unityIcon
        ]
    },
    {
        key: 4,
        img: '',
        vid: '../assets/PongGame.mp4',
        title: 'Pong Game',
        description: 'Reamde of a classic game called PongGame. It is a Player v.s. PC game.',
        link: 'https://github.com/BenjaminnHuang/PongGame',
        languages: [
            csharpIcon,
            unityIcon
        ]
    },
]

export default data