"use client"
import Image from 'next/image';
import './Welcome.css'
import laptop_image from '@/public/welcome/laptop_image.png'
import desktop_image from '@/public/welcome/desktop_image.png'
import phone_image from '@/public/welcome/phone_image.png'
import FadeInSection from '@/app/components/FadeInSection';


export default function Welcome(){
  return (
    <div id='welcome-section' className='welcome-section pt-20 xl:pt-30' >
      <FadeInSection>
        <div className="flex flex-col items-center">
            <p id="hello" 
                className='text-2xl md:text-3xl xl:text-4xl font-title transform -translate-x-15 sm:-translate-x-40 xl:-translate-x-50 mt-10 z-0 '>
              Hello, welcome to
            </p>
            <h1 id="hello-name" className='text-4xl md:text-5xl xl:text-6xl font-title font-bold mt-5 text-gradient'>
              Wakana's
            </h1>
            <h1 id="hello-title" className='text-4xl md:text-5xl xl:text-6xl font-title font-bold mt-5 text-gradient'>
              PORTFOLIO
            </h1>
            <p id="jobtitle" className='text-base sm:text-lg md:text-xl lg:text-3xl font-title mt-3'>
              FRONT-END / WEB DEVELOPER
            </p>
        </div>
      </FadeInSection>

      <FadeInSection delay={0.5}>
        <div className="device-image">
          <div className="device1">
            <Image src={laptop_image} alt="laptop-image" width={150} height={100}/>
          </div>
            <div className="device2">
              <Image src={phone_image} alt="phone-image" width={100} height={100}/>
            </div>
            <div className="device3">
              <Image src={desktop_image} alt="desktop-image" width={130} height={100}/>
            </div>
        </div>
      </FadeInSection>
     {/* device images from Loose Drawing:https://loosedrawing.com */}
    </div>
  )
}

