"use client";
import { useState, useEffect } from 'react'
import Image from 'next/image';
import './Projects.css'
import project_data from './data/project_data.js'
import arrow_forward from '@/public/projects/arrow_forward.svg'
import wing_icon_pink from '@/public/wing_icon_pink.svg'
import double_arrow_up from '@/public/double_arrow_up.svg'
import double_arrow_down from '@/public/double_arrow_down.svg'
import { HiArrowRight, HiChevronDoubleDown, HiChevronDoubleUp } from "react-icons/hi";



export default function Projects() {

    const [showAllProjects, setShowAllProjects] = useState(false);
    const displayedProjects = !showAllProjects ? project_data.slice(0, 3) : project_data;

  return (
    <div id="projects" className='pt-15 mx-4 pb-3'>
      <div className="px-4 max-w-7xl mx-auto">
        {/* Title */}
        <div className="relative flex justify-center text-center mb-2">
            <Image className="ml-85 md:ml-115 xl:ml-145 md:mt-[-25] absolute z-0 w-10 h-10 md:w-20 md:h-20"
                    src={wing_icon_pink} alt="wing icon"  width={15} height={15}/>
            <h1 className="font-title text-4xl md:text-5xl xl:text-6xl relative z-10">
                PROJECT LIBRARY
            </h1>
        </div>



        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full px-5 text-base md:text-lg xl:text-xl">
            {displayedProjects.map((project, index)=>{
                return(
                <div key={index} className='project border-2 border-black rounded-lg text-center'>
                    <Image  src={project.w_img} alt={project.w_name} width={600} height={250} className="mx-auto rounded"/>
                    <div className='font-bold px-2'>{project.w_name}</div>
                    <p className="px-2 py-3 text-sm md:text-base">{project.w_disc}</p>
                    <a href={project.w_link} target="_blank" className="project-tile">
                        <div className='see-more'>See More
                          <HiArrowRight className="inline-block"/>
                        </div>
                    </a>
                </div>

                    )
            })}
        </div>
             {project_data.length > 3 && (
                <button className="read-more-btn" onClick={() => setShowAllProjects(prevState => !prevState)}>
                  {showAllProjects 
                   ?<span>Hide Projects<HiChevronDoubleUp className="inline-block"/></span>
                   :<span>Read More<HiChevronDoubleDown className="inline-block"/></span> }
                </button>
             )}
      </div>
    </div>
  )
}

