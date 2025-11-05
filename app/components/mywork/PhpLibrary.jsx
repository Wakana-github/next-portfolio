'use client'
import { useState } from 'react';
import Image from 'next/image';
import navigation from '@/public/mywork/phpLibrary/Navigation_LibrarySystem.png'
import prototype from '@/public/mywork/phpLibrary/Prototype_LibrarySystem.png'
import login from '@/public/mywork/phpLibrary/php_login.png'
import search from '@/public/mywork/phpLibrary/php_search.png'
import edit from '@/public/mywork/phpLibrary/php_edit.png'
import SQL from '@/public/mywork/phpLibrary/SQLCommand.png'
import result from '@/public/mywork/phpLibrary/php_result.png'
import csrfToken from '@/public/mywork/phpLibrary/csrf_code.png'
import sqlInjection from '@/public/mywork/phpLibrary/sqlInjection.png'
import encryptedData from '@/public/mywork/phpLibrary/encryptedData.png'
import xssCode from '@/public/mywork/phpLibrary/xssCode.png'
import limitAttempts from '@/public/mywork/phpLibrary/limitAttempts.png'
import MoreDetailButton from '../seeMoreDetailButton/SeeMoreDetailButton';
import CloseDetailButton from '../seeMoreDetailButton/closeDetailButton';
import FadeInSection from '@/app/components/FadeInSection';




export default function PhpLibrary (){

const [showDetails, setShowDetails] = useState(false);

  return (
    <FadeInSection>
    <div className="bg-gray-200 pt-5 md:pt-15 px-8 md:px-4">
        <div id="phpLibrary" className="max-w-7xl mx-auto pb-3">
                <div className="lg:flex lg:justify-center ms:mx-6 lg:mx-10 text-base md:text-lg xl:text-xl">
                    {/* --------- Left ----------*/}
                    <div className="left lg:mr-8 lg:w-1/2">
                        <h2 className="font-title text-2xl md:text-3xl xl:text-4xl pb-5 darkText-gradient">
                            3. Library System</h2>
                        <h3 className="font-subHeading text-xl md:text-2xl xl:text-3xl mt-2">Technology Used</h3>
                        <p>- HTML, CSS (Bootstrap), PHP and MySQL</p>
                        <h3 className="font-subHeading text-xl md:text-2xl xl:text-3xl mt-3">Purpose</h3>
                        <p>- This system was developed as part of my coursework. It is designed for library management and includes a login page styled with Bootstrap.</p>
                        <h3 className="font-subHeading text-xl md:text-2xl xl:text-3xl mt-3">Code link</h3>
                        <p>- View the <a href="https://vegelog.xsrv.jp/" target="_blank" alt="githubLink" className="text-blue-700 border-b">
                                live page
                            </a>
                        </p>
                        <p>- View the source code on my <a href="https://github.com/Wakana-github/php_LibraryManagement" target="_blank" alt="githubLink" className="text-blue-700 border-b">
                             Github</a>
                        </p>
                    </div>
                    {/* --------- Right ----------- */}
                    <div className="right lg:w-1/2">
                        <h3 className="font-subHeading text-xl md:text-2xl xl:text-3xl mt-3">Design</h3>
                        <p>- The design was created using Figma.
                        <br/>- View sitemap and storyboard <a href={navigation.src} target="_blank" alt="siteMap" className="text-blue-700 border-b">(click)</a>
                        <br/>- View prototype image <a href={prototype.src} target="_blank" alt="githubLink" className="text-blue-700 border-b">(click)</a></p>
                        <div className="block place-items-center mt-5 px-2 lg:flex">
                                <Image className='prototype' src={prototype} alt="prototype_image2" width={350} height={350}/>
                        </div>
                        <div className="grid place-items-center lg:flex lg:pl-5">
                        {!showDetails && (
                            <MoreDetailButton onClick={() => setShowDetails(true)} />
                        )}
                        </div>
                    </div>
                    
                </div>
                    
                {/* ---------- Page2 ------ */}
                {showDetails && (  
                <>
                    <div className=" max-w-7xl mx-auto lg:flex lg:justify-center ms:mx-6 lg:mx-10 text-base md:text-lg xl:text-xl mt-5">
                        <div className="left lg:mr-8 lg:w-1/2">
                            <h3 className="font-subHeading text-xl md:text-2xl xl:text-3xl mt-3">Features</h3>
                            <h4 className="font-bold mt-3"> Login Page </h4>
                            <p>- Only authorlised users can log  in to the system. </p>
                            <h4 className="font-bold mt-3">Database Interaction</h4>
                            <p>- Authorised users can Create, Read, Update and Delete book data in the library databse.</p>
                            <div className="block place-items-center sm:flex sm:justify-flex sm:items-center gap-2 mt-5">
                                <div>
                                    <Image className='mt-3' src={login} alt="login_image" width={200} height={400}/>
                                </div>
                                <div>
                                    <Image className='mt-3' src={search} alt="search_image" width={200} height={400}/>
                                </div>
                                <div>
                                    <Image className='mt-3' src={edit} alt="edit_image" width={200} height={400}/>
                                </div>
                            </div>
                        </div>
                        <div className="right lg:w-1/2">
                            <div className="block place-items-center px-5 pt-5">
                                <Image className='SQL' src={SQL} alt="login_image" width={400} height={700}/>
                                <Image className='mt-5' src={result} alt="search_image" width={400} height={700}/>
                            </div>
                        </div>
                    </div> 

                    {/* -------- Page3 ----------- */}
                    <div className=" max-w-7xl mx-auto lg:flex lg:justify-center ms:mx-6 lg:mx-10 text-base md:text-lg xl:text-xl mt-5">
                        <div className="left lg:mr-8 lg:w-1/2">
                            <h3 className="font-subHeading text-xl md:text-2xl xl:text-3xl mt-3">Security Features</h3>
                            <h4 className="font-bold mt-3"> CSRF Token </h4>
                            <p>- Set a CSRF token to prevent malicious requests from third-party websites.</p>
                            <div className="block place-items-center">
                                <Image className='csrfToken' src={csrfToken} alt="csrfToken_image" width={550} height={300}/>
                            </div>
                            <h4 className="font-bold mt-3">SQL Injection Prevention</h4>
                            <p>- Used prepared statements and parameter binding to prevent SQL injection.</p>
                            <div className="block place-items-center">
                                <Image className='sqlInjection' src={sqlInjection} alt="sqlInjection_image"width={550} height={300}/>
                            </div>
                        </div>
                        <div className="right lg:w-1/2">
                        <h4 className="font-bold mt-3">Password Hashing & Verification</h4>
                            <p>- Stored encrypted passwords in the database and used password_verify() to securely compare hashed passwords.</p>
                            <div className="block place-items-center">
                                <Image className='encryptedData' src={encryptedData} alt="encryptedData_image" width={550} height={300} />
                            </div>
                            <h4 className="font-bold mt-3">XSS Prevention</h4>
                            <p>- Escape error messages using htmlspecialchars() to prevent cross-site scripting.</p>
                            <div className="block place-items-center">
                                <Image className='xssCode' src={xssCode} alt="xssCode_image" width={550} height={300}/>
                            </div>
                        <h4 className="font-subHeading text-xl md:text-2xl xl:text-3xl mt-3">Lesson Learned</h4>
                            <p>- It was my first time creating a login feature with a database on a rental server. I researched and implemented the security measures listed above, but I recognise the importance of continuously learning and improving best practices.</p>

                        </div>
                        </div>
                        <div className="md:text-xl xl:text-2xl grid place-items-center mt-10">
                            <CloseDetailButton onClick={() => setShowDetails(false)} />
                        </div>
                    </> 
            )}       
        </div>
    </div> 
    </FadeInSection>
  )
}

