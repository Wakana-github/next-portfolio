"use client";
import Image from 'next/image';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import {useState, useRef, useEffect} from 'react'
// import menu_open from '../../assets/menu_open.svg'
// import menu_close from '../../assets/menu_close.svg'
import wing_icon_pink from '@/public/wing_icon_pink.svg'
import logo from "@/public/logo.png";
import Link from 'next/link';
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai";


export default function Navbar() {

  const [menuOpen, setMenuOpen] =useState(false);

  const handleNav = () =>{
    setMenuOpen(!menuOpen);
  }

  return (
    <nav className={`fixed w-full h-20  shadow-xl bg-[#625551] text-white z-100`}> 
      <div className="flex justify-between items-center h-full w-hull px-4 2xl:px-16">

      {/* Left side: Logo  */}
      <div> 
        <Link href="/"> 
            <Image src={logo} alt="logo" width="200" height="75" className="cursor-pointer" priority/>
        </Link>
      </div>

      {/* Right side: links  */}
      <div className="hidden md:flex  w-full">
        {/* /<Image src={menu_open} onClick = {openMenu} alt="" className='nav-mob-open' width={15} height={15}/> */}
      
          <ul className="flex justify-end items-center gap-x-1 w-full">
            {/* <Image src={menu_close} onClick = {closeMenu} alt="" className='nav-mob-close' width={15} height={15} />*/}
            
            {/* Welcome */}
            <li>
                <AnchorLink  offset={50} className='ml-4 lg:ml-10 hover:border-b' href='#welcome-section'>
                  Home
                </AnchorLink>
                {/* {menu==='welcome'? <img src={wing_icon_pink} alt =''/>:<></>} */}
            </li> 

            {/* About */}
            <li>
              <AnchorLink  offset={50} className='ml-4 lg:ml-10 hover:border-b' href='#about-me' >
                  About me
              </AnchorLink>
              {/* {menu==='about'? <Image src={wing_icon_pink} alt =''/>:<></>} */}
            </li>

             {/* Skills */}
            <li>
              <AnchorLink  offset={50} className='ml-4 lg:ml-10 hover:border-b' href='#skills' >
                Skills
              </AnchorLink>
              {/* {menu==='skills'? <Image src={wing_icon_pink} alt ='' width={10} height={10}/>:<></>} */}
            </li>

            {/* qualification */}
            <li>
              <AnchorLink  offset={50} className='ml-4 lg:ml-10 hover:border-b' href='#qualification'>
                  Qualification
              </AnchorLink>
              {/* {menu==='qualification'? <img src={wing_icon_pink} alt ='' width={10} height={10}/>:<></>} */}
            </li>

            {/* MyWork */}
            <li>
              <AnchorLink  offset={50} className='ml-4 lg:ml-10 hover:border-b' href='#scoreSheet'>
                My work
              </AnchorLink>
              {/* {menu==='myWork'? <Image src={wing_icon_pink} alt ='' width={10} height={10}/>:<></>} */}
            </li>

            {/* Projects*/}
            <li>
              <AnchorLink  offset={50} className=' ml-4 lg:ml-10 hover:border-b' href='#projects'>
                Projects
              </AnchorLink>
              {/* {menu==='projects'? <Image src={wing_icon_pink} alt ='' width={10} height={10}/>:<></>} */}
            </li>

            {/* Contact*/}
            <li>
              <AnchorLink  offset={50} className=' lg:ml-10 hover:border-b'  href='#contact' >
                Contact
              </AnchorLink>
              {/* {menu==='contact'? <Image src={wing_icon_pink} alt ='' width={10} height={10}/>:<></>} */}
            </li>
          </ul>
        </div>
        

        <div onClick={handleNav} className="md:hidden top-6 right-6 cursor-pointer">
          <AiOutlineMenu size={25}/>       
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={
        menuOpen
        ? "fixed right-0 top-0 w-[65%] md:hidden h-screen bg-[#625551] p-10 ease-in duration-200 transform translate-x-0"
        : "fixed right-0 top-0 w-[65%] md:hidden h-screen bg-[#625551] p-10 ease-in duration-200 transform translate-x-full"
      }>
        <div className="flex w-full items-center justify-end">
          <div onClick={handleNav} className="absolute top-6 right-6 cursor-pointer">
            <AiOutlineClose size={25}/>
          </div>
        </div>
        <ul className="flex flex-col gap-8 mt-16 text-lg text-white">
          <li><AnchorLink  offset={50} href="/" >Home</AnchorLink></li>
          <li><AnchorLink  offset={50} href="#about-me" >About</AnchorLink></li>
          <li><AnchorLink  offset={50} href="#skills" >Skills</AnchorLink></li>
          <li><AnchorLink  offset={50} href="#qualification" >Qualification</AnchorLink></li>
          <li><AnchorLink  offset={50} href="#projects" >Projects</AnchorLink></li>
          <li><AnchorLink  offset={50} href="#contact" >Contact</AnchorLink></li>
        </ul>
      </div>

    </nav>
    
  )
}

