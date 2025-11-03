"use client"
// import './Footer.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import {useState, useRef} from 'react'



export default function Footer() {

  return (

 

    <div className='footer bg-[#625551] text-white pb-2'>
      <hr className="flex justify-center text-gray-600 " />
      <ul className="flex flex-col sm:flex-row  justify-between text-center mx-4 text-base lg:text-lg gap-1">
        <li>
          <AnchorLink  offset={50}  href="#welcome-section" className="hover:border-b" >
            welcome
          </AnchorLink>
        </li>
        <li>
          <AnchorLink  offset={50}  href="#about-me" className="hover:border-b">
            about me
          </AnchorLink>
        </li>
        <li>
          <AnchorLink  offset={50}  href="#skills" className="hover:border-b">
            skills
          </AnchorLink>
        </li>
        <li>
          <AnchorLink  offset={50}  href="#qualification" className="hover:border-b">
            qualification
          </AnchorLink>
        </li>
        <li>
          <AnchorLink  offset={50}  href="#scoreSheet" className="hover:border-b">
            my work
          </AnchorLink>
        </li>
        <li>
          <AnchorLink key='projects' offset={50}  href="#projects" className="hover:border-b">
            projects
          </AnchorLink>
        </li>
        <li>
          <AnchorLink  offset={50}  href="#contact" className="hover:border-b">
            contact
          </AnchorLink>
        </li>
      </ul>
      <div className="text-sm lg:text-base m-4 ">
        <p>@2025 Wakana Gushi. All Rights Resereved</p>
      </div>
  </div>

  )
}
