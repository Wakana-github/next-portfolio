"use client";
import {Inter} from 'next/font/google'
import {useState} from 'react'
import About from "@/app/components/About";
import Skills from "@/app/components/Skills";
import MyWork from "@/app/components/mywork/MyWork";
import Contact from "@/app/components/contact/Contact";
import Footer from "@/app/components/footer/Footer";
import Qualification from "@/app/components/qualification/Qualification";
import Projects from "@/app/components/projects/Projects";
import Welcome from "@/app/components/welcome/Welcome";
import Navbar from "@/app/components/Navbar";


export default function Home() {
     const [menu, setMenu] = useState("welcome");
  return (
    <div>
      <Navbar/>
      <Welcome />
      <About/>
      <Skills/>
      <Qualification />
      <MyWork/>
      <Projects />
      <Contact />
      <Footer/>
    </div>
  );
}
