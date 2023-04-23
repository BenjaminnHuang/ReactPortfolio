import React from "react";

function ProjectItems({link, title, description, image}){
    return(

        <div className="flex flex-col md:flex-row m-8 w-full bg-slate-700 rounded-lg overflow-hidden max-w-6xl">
            <img src={image} alt="project" className="m-6 h-54 md:h-96 w-fit cursor-pointer object-cover "/>
            <div className=" my-6 mx-20 flex flex-col text-white w-1/2">
                <div className="text-6xl mt-6 text-center">{title}</div>
                <div className="mt-10 px-4 text-3xl">{description}</div>
            </div>
            
        </div>
    )
    
}


export default ProjectItems