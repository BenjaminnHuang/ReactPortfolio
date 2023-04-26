import React from "react";
import {FaReact} from "react-icons/fa"
import {IoLogoJavascript, IoLogoCss3, IoLogoHtml5} from "react-icons/io5"
import { IconContext} from "react-icons";

function ProjectItems({link, title, description, image, languagues}){

    const icons = languagues.map(item => {
        return(
            <div>
                {item}
            </div>
        )
    })

    return(
        <div className="flex flex-col">
            <h1 className="text-white text-lg md:text-4xl mb-4">{title}</h1>
            
            <div className="bg-gray-500 rounded-lg overflow-hidden h-5/6 max-w-md">

                {/*Image*/}
                <img src={image} alt="project" className="cursor-pointer"/>
                
                <div className="flex justify-center flex-row m-4 gap-8">
                    {icons}
                </div>
                   
                <div className="text-gray-200 m-6 text-3xl">{description}</div>
                
            </div>
        </div>
    )
    
}


export default ProjectItems