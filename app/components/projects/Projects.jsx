"use client";
import { useState} from 'react'
import Image from 'next/image';
import './Projects.css'
import project_data from './data/project_data.js'
import wing_icon_pink from '@/public/wing_icon_pink.svg'
import { HiArrowRight, HiChevronDoubleDown, HiChevronDoubleUp } from "react-icons/hi";
import FadeInSection from '@/app/components/FadeInSection';



export default function Projects() {

    const [showAllProjects, setShowAllProjects] = useState(false);
    const displayedProjects = !showAllProjects ? project_data.slice(0, 3) : project_data;

  return (
    <div id="projects" className='pt-15 mx-4 pb-3'>
      <div className="px-4 max-w-7xl mx-auto">
        {/* Title */}
        <FadeInSection>
          <div className="relative flex justify-center text-center mb-2">
              <Image className="ml-85 md:ml-115 xl:ml-145 md:mt-[-25] absolute z-0 w-10 h-10 md:w-20 md:h-20"
                      src={wing_icon_pink} alt="wing icon"  width={15} height={15}/>
              <h1 className="font-title text-4xl md:text-5xl xl:text-6xl relative z-10">
                  PROJECT LIBRARY
              </h1>
          </div>
        </FadeInSection>


        <FadeInSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full px-5 text-base md:text-lg xl:text-xl">
              {displayedProjects.map((project, index)=>{
                  return(
                  <div key={index} className='project border-2 border-black dark:border-white rounded-lg text-center'>
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
        </FadeInSection>
             {project_data.length > 3 && (
              <div className="block place-items-center my-5">
                <button className=" grid place-items-center  py-4 px-10 rounded-xl border-2 transition duration-300 cursor-pointer read-more-bg text-black dark:border-gray-500 hover:scale-105" 
                  onClick={() => setShowAllProjects(prevState => !prevState)}>
                    {showAllProjects 
                    ?<span className="text-base md:text-lg xl:text-xl">Show Less<HiChevronDoubleUp className="inline-block"/></span>
                    :<span className="text-base md:text-lg xl:text-xl">Show More<HiChevronDoubleDown className="inline-block "/></span> }
                </button>
              </div>
             )}
      </div>
    </div>
  )
}

