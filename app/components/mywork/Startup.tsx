'use client'
import Image from 'next/image';
import { useState, useRef } from 'react';
import sratUp_img from'@/public/mywork/startup/Startup_LP.png'
import lightMode_img from'@/public/mywork/startup/startup_light.png'
import darkMode_img from'@/public/mywork/startup/startup_dark.png'
import navShadowCode1 from'@/public/mywork/startup/startup_navHandler.png'
import navShadowCode2 from'@/public/mywork/startup/startup_navHandler2.png'
import textComponent from'@/public/mywork/startup/text_conponent.png'
import textComponentCode1 from'@/public/mywork/startup/text_componentCode.png'
import textComponentCode2 from'@/public/mywork/startup/text_componentCode2.png'
import reviewCard from'@/public/mywork/startup/reviewCard.png'
import pricingCard from'@/public/mywork/startup/priceCard.png'
import clientComponentCode from'@/public/mywork/startup/clientComponentCode.png'
import priceCardCode from'@/public/mywork/startup/priceCardCode.png'
import wing_icon_pink from '@/public/wing_icon_pink.svg'
import MoreDetailButton from '../seeMoreDetailButton/SeeMoreDetailButton';
import CloseDetailButton from '../seeMoreDetailButton/closeDetailButton';
import FadeInSection from '@/app/components/FadeInSection';


const Startup = () => {

  const [showDetails, setShowDetails] = useState(false);
  const statrtUpRef = useRef<HTMLDivElement | null>(null);
  
    const handleCloseDetails = () => {
      //Scroll to the top (where there is ref)
      setShowDetails(false);
      if (statrtUpRef.current) {
        const y = statrtUpRef.current.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    };
  




  return (
    <FadeInSection>
    <div className="pt-5 md:pt-15 px-4">
       <div id="startUp" ref={statrtUpRef} className=" px-4 max-w-7xl mx-auto pb-3">
            <div className="lg:flex lg:items-center lg:justify-center ms:mx-6 lg:mx-10 text-base md:text-lg xl:text-xl">
                {/* Left */}
                <div className="left lg:mr-8 lg:w-1/2">
                    <h2 className="font-title text-2xl md:text-3xl xl:text-4xl pb-5 darkText-gradient">2. 
                      Startup Landing Page
                    </h2>
                    <h3 className="font-subHeading text-xl md:text-2xl xl:text-3xl mt-2">Technology Used</h3>
                    <p>- HTML, Tailwind.CSS, Next.js and TypeScript</p>
                    <div className="block place-items-center px-2">
                      <Image className='mt-5' 
                              src={sratUp_img} alt="contactForm_image"
                              width={700}
                              height={500}
                      />
                    </div>
                    <h3 className="font-subHeading text-xl md:text-2xl xl:text-3xl mt-3">Purpose</h3>
                    <p>- This project was created to practice using modern front-end technologies and to build a sample corporate website.</p>
                    <h3 className="font-subHeading text-xl md:text-2xl xl:text-3xl mt-3">Code link</h3>
                    <p>- See the <a href="https://startup-page-dark-7thm.vercel.app/" target="_blank"  className="linkfont">
                      live page</a>
                    </p>
                    <p>- See the code on my <a href="https://github.com/Wakana-github/startupPage_dark" target="_blank" className="linkfont">
                      Github</a>
                    </p>       
                </div>
                {/* right */}
                <div className="right lg:w-1/2">
                    <h3 className="font-subHeading text-xl md:text-2xl xl:text-3xl mt-3 space-y-1">Design</h3>
                    <p>- Based on a tutorial video design, with enhancements made to component code and the addition of a dark mode feature.                    </p>
                    <p>- Utilised React icons, CSS animations, and Tailwind CSS buttons from devdojo.com</p>
                    <p>- Followed a mobile-first, responsive design approach</p>
                    <h3 className="font-subHeading text-xl md:text-2xl xl:text-3xl mt-3">Features</h3>
                    <div className="space-y-1">
                      <p>- Mobile responsive layout</p>
                      <p>- User-friendly navigation menu</p>
                      <p>- Dark mode toggle button</p>
                      <p>- Smooth Animation effects</p>
                      <p>- Scroll-to-top button</p>
                      <p>- Reusable text components</p>
                      <p>- Card components for client reviews and pricing</p>
                    </div>
                    <div className="grid place-items-center lg:flex lg:pl-5">
                      {!showDetails && (
                        <MoreDetailButton onClick={() => setShowDetails(true)} />
                      )}
                    </div>
                </div>
            </div>
            {showDetails && (  
              <>
              <div className=" max-w-7xl mx-auto lg:flex lg:items-center lg:justify-center ms:mx-6 lg:mx-10 text-base md:text-lg xl:text-xl">
                <div className="left lg:mr-8 lg:w-1/2">
                    <h3 className="font-subHeading text-xl md:text-2xl xl:text-3xl mt-5">Tailwind.CSS Features</h3>
                    <h4 className="font-bold mt-3">Responsive Design</h4>
                    <p>- Suitable for both desktop and mobile devices. A hamburger menu appears on smaller screens for easy navigation.</p>
                    <h4 className="font-bold mt-3">Navigation Menu</h4>
                    <p>- The navigation bar is fixed at the top of the screen for quick access.</p>
                    <h4 className="font-bold mt-3">Dark Mode Toggle Button</h4>
                    <p>- Users can switch between light and dark modes using a toggle button at the top of the page.</p>
                    <h4 className="font-bold mt-3">Scroll-to-Top Button</h4>
                    <p>- Allows users to quickly return to the top of the page using an arrow button located at the bottom right corner. Its visibility is controlled through React state.</p>
                </div>
                <div className="right lg:w-1/2 my-5 lg:mt-25">
                     <div className="w-full grid place-items-center gap-1 sm:flex sm:justify-center md:gap-5 md:py-5">
                          <Image className='w-35 h-60 md:w-50 md:h-80' src={lightMode_img} alt="lightMode_img" width={300} height={400}/>
                          <Image className='w-35 h-60 md:w-50 md:h-80' src={darkMode_img} alt="darkMode_img" width={300} height={400}/>
                      </div>
                      <h4 className="font-bold mt-5">Shadow Effect on the Navigation Bar</h4>
                      <p>- A subtle shadow appears on the navigation bar when scrolling down, making it more visible. This effect is implemented using the useEffect hook in React.</p>
                      <div className="block place-items-center">
                        <Image className='mt-4 mb-2' src={navShadowCode1} alt="navShadowCode1_img" width={550} height={300}/>
                        <Image className='' src={navShadowCode2} alt="navShadowCode2_img" width={550} height={200}/>
                      </div>
                </div> 
            </div>
            <div className=" max-w-7xl mx-auto lg:flex lg:items-center lg:justify-center ms:mx-6 lg:mx-10 text-base md:text-lg xl:text-xl mt-10">
                <div className="left lg:mr-8 lg:w-1/2">
                    <h3 className=" page_break font-subHeading text-xl md:text-2xl xl:text-3xl">React.js and Next,js Features</h3>
                    <h4 className="font-bold mt-2">Reusable Text Component</h4>
                    <p>- A reusable text component was created and used multiple times throughout the page to improve coding efficiency and maintain design consistency.</p>
                    <div className="block place-items-center px-2">
                      <Image className='mb-2' src={textComponent} alt="textComponent" width={150} height={100}/>
                      <Image className='mb-2' src={textComponentCode1} alt="textComponentCode1" width={550} height={300}/>
                      <Image className='textComponentCode2' src={textComponentCode2} alt="textComponentCode2" width={400} height={200}/>
                    </div>
                    <h4 className="font-bold mt-5">Card Components for Client Reviews and Pricing</h4>
                    <p>- Card components were created with a consistent design, allowing easy reuse across the website for elements such as client reviews and pricing sections.</p>              
                </div>
                <div className="right lg:w-1/2">
                  <div className="block place-items-center px-2">
                      <Image className='mt-5' src={reviewCard} alt="reviewCard_img" width={550} height={350}/>
                      <Image className='mt-5' src={pricingCard} alt="pricingCard_img"  width={550} height={350}/>
                      <Image className='mt-5' src={clientComponentCode} alt="clientComponentCode_img"  width={300} height={200}/>
                      <Image className='priceCardCode' src={priceCardCode} alt="priceCardCode_img"  width={300} height={200}/>
                  </div>
                </div> 
            </div>
            <div className="md:text-xl xl:text-2xl grid place-items-center mt-10">
              <CloseDetailButton onClick={handleCloseDetails} />
            </div>
            </>
          )}
        </div>
      </div>
    </FadeInSection>
      
  )
}

export default Startup