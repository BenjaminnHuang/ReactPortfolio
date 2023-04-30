import React from "react";
import {FaReact} from "react-icons/fa"
import {IoLogoJavascript, IoLogoCss3, IoLogoHtml5} from "react-icons/io5"
import { IconContext} from "react-icons";

function ProjectItems({link, title, description, image, languagues, vid}){

    const icons = languagues.map(item => {
        return(
            <div>
                {item}
            </div>
        )
    })

    const projectLabel = image == '' ? <video className=" cursor-pointer rounded-lg opacity-80 hover:opacity-100"  src={vid} autoPlay loop muted/> : <img src={image} alt="project" className="cursor-pointer rounded-lg opacity-80 hover:opacity-100"/>

    return(
        <div className="flex flex-col">
            <h1 className="text-white text-2xl xl:text-6xl lg:text-5xl md:text-4xl mb-4 font-Titilium font-bold">{title}</h1>
            
            <div className="overflow-hidden h-auto xl:max-w-md max-w-sm font-Titilium">
                {/*Image 770 x 770*/}
                <a href={link} target="_blank">{projectLabel}</a>
                   
                <div className="text-gray-200 my-6 text-3xl">{description}</div>

                <div className="flex justify-start flex-row gap-8">
                    {icons}
                </div>
            </div>
        </div>
    )
    
}


export default ProjectItems