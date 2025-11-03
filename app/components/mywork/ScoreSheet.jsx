'use client'
import Image from 'next/image';
import { useState } from 'react';
import home_img from'@/public/mywork/scoreApp/home_img.png'
import app_img from'@/public/mywork/scoreApp/app_img.png'
import sendToken_img from'@/public/mywork/scoreApp/sendToken.png'
import origin_img from'@/public/mywork/scoreApp/origin.png'
import sanitise_img from'@/public/mywork/scoreApp/sanitise.png'
import validation_img from'@/public/mywork/scoreApp/vaidation.png'
import ratelimit_img from'@/public/mywork/scoreApp/ratelimit.png'

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


 export default function ScoreSheet () {

  const [showDetails, setShowDetails] = useState(false);




  return (
    <div id="scoreSheet" className="pt-5  bg-gray-200 md:pt-15 px-4">
       <div  className=" px-4 max-w-7xl mx-auto pb-3">
        <div className="relative flex justify-center text-center mb-10">
            <Image className="ml-50 md:ml-65 xl:ml-85 md:mt-[-25] absolute z-0 w-10 h-10 md:w-20 md:h-20"
                    src={wing_icon_pink} alt="wing icon"  width={15} height={15}/>
            <h1 className="font-title text-4xl md:text-5xl xl:text-6xl relative z-10">
                MY WORK
            </h1>
        </div>
            <div className="lg:flex lg:items-center lg:justify-center ms:mx-6 lg:mx-10 text-base md:text-lg xl:text-xl">
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
                    <p>- This is a score tracking and calculation application for board games. 
                      It allows users to calculate and record their scores, and create groups. 
                      Premium users can access their personal and group score statistics.
                    </p>
                    <h3 className="font-subHeading text-xl md:text-2xl xl:text-3xl mt-3">Purpose</h3>
                    <p>- This project was built to practice Full-stack web application, 
                      including authentication and secure payments. It was originally built with Node.js(Express) then converted into Next.js app router.</p>     
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
                      </a>.
                    </p> 
                    <h3 className="font-subHeading text-xl md:text-2xl xl:text-3xl mt-3 space-y-1">Design</h3>
                    <p>- Utilised Tailwind CSS, Motion animations, and Google Fonts</p>
                    <p>- Created and implemented reusable button components across the application</p>
                    <p>- Mobile-first design approach</p>
                    <h3 className="font-subHeading text-xl md:text-2xl xl:text-3xl mt-3">Features</h3>
                    <div className="space-y-1">
                      <p>- User registration and authentication with Clerk</p>
                      <p>- Calculation of inputted scores and automated ranking</p>
                      <p>- Group creation and management</p>
                      <p>- Create a custom sheet by handling number of items and players </p>
                      <p>- Set nickname as a user's player name </p>
                      <p>- Access to personal and group statistics as a Premium feature</p>
                      <p>- Secure subscription payment integration with Stripe</p>
                      <p>- Mobile-first, responsive layout</p>
                      <p>- User-friendly navigation menu</p>
                      <p>- Animation effects with Motion</p>
                    </div>
                    <div className="block place-items-center lg:flex lg:pl-5">
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
                    <h3 className="font-subHeading text-xl md:text-2xl xl:text-3xl mt-25">Security Features</h3>
                    <h4 className="font-bold mt-3">User registration and authentication</h4>
                    <p>- Implemented Clerk authenticaion to provide secure user authentication personal data management. </p>
                    <h4 className="font-bold mt-3">Check CSRF Token and Origin</h4>
                    <p>- Implemented Origin and CSEF token check to ensure the API request is made from the correct user.</p>
                    <div className="w-full grid place-items-center py-3 gap-2 md:py-3">
                      <Image src={sendToken_img} alt="auth_img" width={350} height={350}/>
                      <Image src={origin_img} alt="auth_img" width={450} height={350}/>
                      <p className="text-sm  text-gray-600">Example of sending tokens and origin check.</p>
                    </div>
                    <h4 className="font-bold mt-3">Rate limit</h4>
                    <p>- Set rate limits to prevent server not to flood with mass request (DoS attack).</p>    
                </div>
                <div className="right lg:w-1/2 my-5">
                  <div className="w-full grid place-items-center py-3 gap-2 mt-25">
                    <Image src={ratelimit_img} alt="sanitise_img" width={450} height={250}/>
                    <p className="text-sm  text-gray-600">Example of ratelimit.</p>
                  </div>
                  <h4 className="font-bold">Sanitisation and Validation for input</h4>
                  <p>- Implemented sanitisation and validation to prevent malisious user to input unexpected code (XSS (Cross-Site Scripting attack)). </p>
                  <p>- Implemented validation for user input to ensure that the input for each field is correct type, expected length and characters.</p>
                  <p>- Implemented sanitisation to remove all HTML tags and attributes, ensuring only plain text is stored in the database.</p>
                    <div className="w-full grid place-items-center py-3 gap-2 md:py-3">
                      <Image src={sanitise_img} alt="sanitise_img" width={450} height={350}/>
                      <Image src={validation_img} alt="validation_img" width={450} height={250}/>
                      <p className="text-sm  text-gray-600">Example of sanitisation and validation.</p>
                    </div>
                </div> 
            </div>
            <div className="md:text-xl xl:text-2xl block place-items-center mt-10">
              <CloseDetailButton onClick={() => setShowDetails(false)} />
            </div>
            </>
          )}
        </div>
      </div>
      
  )
}
