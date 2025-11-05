'use client'
import Image from 'next/image';
import { useState } from 'react';
import app_img from'@/public/mywork/scoreApp/app_img.png'
import sendToken_img from'@/public/mywork/scoreApp/sendToken.png'
import origin_img from'@/public/mywork/scoreApp/origin.png'
import sanitise_img from'@/public/mywork/scoreApp/sanitise.png'
import validation_img from'@/public/mywork/scoreApp/vaidation.png'
import ratelimit_img from'@/public/mywork/scoreApp/ratelimit.png'
import wing_icon_pink from '@/public/wing_icon_pink.svg'
import MoreDetailButton from '../seeMoreDetailButton/SeeMoreDetailButton';
import CloseDetailButton from '../seeMoreDetailButton/closeDetailButton';
import ImgSlider from '@/app/components/mywork/ImgSlider';
import FadeInSection from '@/app/components/FadeInSection';


 export default function ScoreSheet () {

  const [showDetails, setShowDetails] = useState(false);




  return (
    <div id="scoreSheet" className="pt-5  bg-gray-200 md:pt-15 px-4">
       <div  className=" px-4 max-w-7xl mx-auto pb-3">
          <FadeInSection>
            <div className="relative flex justify-center text-center mb-10">
              <Image className="ml-50 md:ml-65 xl:ml-85 md:mt-[-25] absolute z-0 w-10 h-10 md:w-20 md:h-20"
                      src={wing_icon_pink} alt="wing icon"  width={15} height={15}/>
              <h1 className="font-title text-4xl md:text-5xl xl:text-6xl relative z-10">
                  MY WORK
              </h1>
            </div>
          </FadeInSection>
          <FadeInSection>
            <div className="lg:flex lg:items-center lg:justify-center ms:mx-6 lg:mx-10 text-base md:text-lg xl:text-xl md:mb-10">
                {/* Left */}
                <div className="left lg:mr-8 lg:w-1/2">
                    <h2 className="font-title text-2xl md:text-3xl xl:text-4xl pb-5 darkText-gradient">
                      1. Score Sheet App
                    </h2>
                    <h3 className="font-subHeading text-xl md:text-2xl xl:text-3xl mt-2">Technology Used</h3>
                    <p>- HTML, Tailwind.CSS, Next.js, TypeScript, MongoDB, Clerk, Stripe, and Vercel</p>
                    <div className="block place-items-center px-2">
                    <Image className='mt-5' 
                            src={app_img} alt="scoreApp_image"
                            width={450}
                            height={350}
                    />
                    </div>
                    <h3 className="font-subHeading text-xl md:text-2xl xl:text-3xl mt-3">Summary</h3>
                    <p>- A full-stack web application designed for tracking and calculating scores in board games. 
                      It allows users to calculate and record their scores, as well as create groups. 
                      Premium users can access their personal and group score statistics.
                    </p>
                    <h3 className="font-subHeading text-xl md:text-2xl xl:text-3xl mt-3">Purpose</h3>
                    <p>- This project was developed to enhance my full-stack development skills,
                      including authentication and secure payment integration. It was initially 
                      built with Node.js(Express) and later converted to a Next.js App Router for 
                      easier deployment and management on Vercel.</p>     
                </div>
                {/* right */}
                <div className="right lg:w-1/2">
                 <h3 className="font-subHeading text-xl md:text-2xl xl:text-3xl mt-3 ">Code link</h3>
                    <p>- See the <a href="https://score-sheet-idq6.vercel.app/" target="_blank" alt="Codelink" className="text-blue-700 border-b">
                         live page
                      </a>
                    </p>
                    <p>- See the code on my <a href="https://github.com/Wakana-github/score-sheet" target="_blank" alt="Githublink" className="text-blue-700 border-b">
                        Github
                      </a>
                    </p> 
                    <h3 className="font-subHeading text-xl md:text-2xl xl:text-3xl mt-3 space-y-1">Design</h3>
                    <p>- Utilised Tailwind CSS, Motion animations, and Google Fonts</p>
                    <p>- Designed and implemented reusable button components across the application</p>
                    <p>- Followed a mobile-first, responsive design approach</p>
                    <h3 className="font-subHeading text-xl md:text-2xl xl:text-3xl mt-3">Features</h3>
                    <div className="space-y-1">
                      <p>- User registration and authentication powered by Clerk</p>
                      <p>- Real-time score calculation and automated ranking system</p>
                      <p>- Group creation and management functionality</p>
                      <p>- Custom score sheet generation based on the number of items and players</p>
                      <p>- Option to set a nickname as the player name</p>
                      <p>- Access to personal and group statistics as a Premium feature</p>
                      <p>- Secure subscription payments integrated with Stripe</p>
                      <p>- Intuitive navigation menu</p>
                      <p>- Animation effects with Motion</p>
                    </div>
                </div>
            </div>
          </FadeInSection>
            <div className="relative overflow-hidden flex justify-center items-center h-60 sm:h-[350px] md:h-[300px] xl:h-[400px] mt-5">
                      <ImgSlider />
            </div>
            <div className="grid place-items-center mt-5 md:mt-10">
              {!showDetails && (
                <MoreDetailButton onClick={() => setShowDetails(true)} />
              )}
            </div>
            

            {showDetails && (
              <FadeInSection>
                <>
                  <div className=" max-w-7xl mx-auto lg:flex lg:items-center lg:justify-center ms:mx-6 lg:mx-10 text-base md:text-lg xl:text-xl">
                    <div className="left lg:mr-8 lg:w-1/2">
                        <h3 className="font-subHeading text-xl md:text-2xl xl:text-3xl mt-7 md:mt-15">Security Features</h3>
                        <h4 className="font-bold mt-3">User registration and authentication</h4>
                        <p>- Implemented Clerk authentication to provide secure user login and personal data management. </p>
                        <h4 className="font-bold mt-3">CSRF Token and Origin Varification</h4>
                        <p>- Implemented Origin and CSEF token varification to ensure that API requests are made only by authorised users.</p>
                        <div className="w-full grid place-items-center py-3 gap-2 md:py-3">
                          <Image src={sendToken_img} alt="auth_img" width={350} height={350}/>
                          <Image src={origin_img} alt="auth_img" width={450} height={350}/>
                          <p className="text-sm  text-gray-600">Example of sending tokens and origin check.</p>
                        </div>
                        <h4 className="font-bold mt-3">Rate limit</h4>
                        <p>- Implemented rate limiting to prevent server from being flooded with excessive requests (DoS attacks).</p>    
                    </div>
                    <div className="right lg:w-1/2 my-5">
                      <div className="w-full grid place-items-center py-3 gap-2 mt-25">
                        <Image src={ratelimit_img} alt="sanitise_img" width={450} height={250}/>
                        <p className="text-sm  text-gray-600">Example of ratelimit.</p>
                      </div>
                      <h4 className="font-bold">SInput Sanitisation and Validation</h4>
                      <p>- Implemented input sanitisation and validation to prevent malisious users from injecting unexpected code (XSS - Cross-Site Scripting attacks). </p>
                      <p>- Implemented validation to ensure that each input field contains the correct data type, expected length, and valid characters.</p>
                      <p>- Applied sanitisation to remove all HTML tags and attributes, ensuring that only plain text is stored in the database.</p>
                        <div className="w-full grid place-items-center py-3 gap-2 md:py-3">
                          <Image src={sanitise_img} alt="sanitise_img" width={450} height={350}/>
                          <Image src={validation_img} alt="validation_img" width={450} height={250}/>
                          <p className="text-sm  text-gray-600">Example of sanitisation and validation.</p>
                        </div>
                    </div> 
                </div>
                <div className="md:text-xl xl:text-2xl grid place-items-center mt-10">
                  <CloseDetailButton onClick={() => setShowDetails(false)} />
                </div>
              </>
            </FadeInSection>
          )}
        </div>
        
      </div>
      
  )
}
