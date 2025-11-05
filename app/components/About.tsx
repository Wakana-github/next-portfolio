"use client";

import Image from 'next/image';
import wing_icon_pink from '@/public/wing_icon_pink.svg';
import wakana_image from '@/public/wakana_image.jpg';
import ContactButton from '@/app/components/contact/ContactButton';
import FadeInSection from '@/app/components/FadeInSection';

export default function About(){
   return (
    <div className="block place-items-center" id="about-me">
      <div className="about-container flex flex-col md:flex-row md:items-start justify-center max-w-7xl mx-auto md:mx-8 p-4">
     
       {/* image */}
        <div className="md:w-1/3 w-full flex justify-center  mt-8 md:mt-40 xl:mt-55 order-2 md:order-0 ">
          <FadeInSection>
            <div>
              <Image 
                id="my-photo" 
                className='rounded-3xl w-[200px] h-[200px] md:w-[250px] md:h-[250px] xl:w-[300px] xl:h-[300px]' 
                src={wakana_image} alt="Photo" width={300} height={300}
              />
              {/* wakana-image.jpg created by Cartoon Face app */}
            </div>
          </FadeInSection>
        </div>

       {/* Title and sentense */}
        <div className="md:w-1/2 w-full order-1">
        <FadeInSection>
          <div className="ml-6">
              <h1 className="font-title text-3xl md:text-5xl xl:text-6xl mt-10 xl:mt-20  relative z-10" 
                  id="about-title ">
                    A LITTLE<br />ABOUT ME
              </h1>
            {/* wing icon */}
            <div className="ml-35 md:ml-55 xl:ml-70 mt-[-50] md:mt-[-75]  absolute z-0 w-12 h-12 md:w-20 md:h-20">
              <Image src={wing_icon_pink} fill className="object-contain" alt="wing icon" />
            </div>
          </div>
          </FadeInSection>

          <FadeInSection>
            <div className='mt-5 about-sentense text-base md:text-lg xl:text-xl  px-6'>
              <p>
                Hi there! I’m a Web Developer capable of both Frontend and Backend development, 
                with a knowleage in a wide range of programming languages, database management, 
                and web techonlogies, including modern front-end libraries, system design, networking, and security, 
                which I acquired through both formal study and personal project development.  
              </p>
              <p className="mt-2">
                Please don’t hesitate to contact me if you’re looking for a developer.
              </p>
                <div className="mt-5 flex justify-end mr-4">
                  <ContactButton />
                </div>
            </div>
          </FadeInSection>
          </div>
        </div>
    </div>
  )
}
