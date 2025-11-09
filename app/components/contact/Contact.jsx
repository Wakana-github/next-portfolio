'use client'
import Image from 'next/image';
import {useState} from 'react';
import { useForm} from "react-hook-form"
import './Contact.css'
import linkedin_logo from '@/public/contact/LI-In-Bug.png'
import github_logo from '@/public/contact/github-mark.png'
import wing_icon_pink from '@/public/wing_icon_pink.svg'
import FadeInSection from '@/app/components/FadeInSection';



    // code from web3forms.com -- create react home
export default function Contact() {
    const { register, handleSubmit, formState: {errors} } = useForm();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [lastSubmitTime, setLastSubmitTime] = useState(0);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    
    const NAME_REGEX = /^[a-zA-Z\s]+$/;
    const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;

    //escape HTML tag
    const sanitiseInput = (input) => {
        if (typeof input !== 'string') return input;
        return input
            .replace(/</g, "&lt;")  
            .replace(/>/g, "&gt;")
            .trim();
    };


    const onSubmit = async (data) => {

        const currentTime = Date.now();

        // Check if less than 30 seconds have passed since the last submission
        if (currentTime - lastSubmitTime < 30000) {
            alert('You are sending messages too quickly. Please wait a moment and try again.');
            return;
        }
        else{

            setIsSubmitting(true);

            const sanitisedData = {
                name: sanitiseInput(data.name),
                email: sanitiseInput(data.email),
                message: sanitiseInput(data.message),
                };

           try{
                const response = await fetch('/api/contact', {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(sanitisedData)
                })

                const res = await response.json();

                if (res.success) {
                    alert(res.message);
                    setLastSubmitTime(currentTime); // Update last submission time
                    //Reset form contents
                    }
            } catch (error) {
                alert('An error occurred while submitting the form. Please try again later.');
            }

            setIsSubmitting(false);
        }
    };


  return (
    <div id='contact' className='pt-15 mx-4 pb-3'>
        <div className=" px-4 max-w-7xl mx-auto">
        <FadeInSection>
            <div className="relative flex justify-center text-center mb-2">
                <Image className="ml-40 md:ml-55 xl:ml-70 md:mt-[-15] absolute z-0 w-10 h-10 md:w-20 md:h-20"
                        src={wing_icon_pink} alt="wing icon"  width={15} height={15}/>
                <h1 className="font-title text-4xl md:text-5xl xl:text-6xl relative z-10">
                    CONTACT
                </h1>
            </div>
        </FadeInSection>
        <FadeInSection>
            <div className="contact-section text-base md:text-lg xl:text-xl">
                <div className="contact-left">
                    <p>Have you got a question?
                    <br/>Please send me a message.</p>
        
                    <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
                        <label className='block form-heading font-subHeading text-xl md:text-2xl xl:text-3xl my-3' htmlFor="name">
                            Your Name:
                        </label>
                        <input 
                            {...register('name', { 
                                required: "Name is required.", 
                                pattern: { value: NAME_REGEX, message: "Name can only contain letters and spaces." } 
                                })
                            } 
                            type="text" 
                            id="name"
                            placeholder="Enter your name"
                            autoComplete="name"
                            disabled={isSubmitting}
                        />
                            {errors.name && (<span className='errormsg'>{errors.name.message}</span>)}

                        <label className='block form-heading font-subHeading text-xl md:text-2xl xl:text-3xl my-3' htmlFor="email">
                            Your Email:
                        </label>
                        <input  {...register('email', { 
                                required: "Email is required.", 
                                pattern: { value: EMAIL_REGEX, message: "Invalid email address." } 
                            })}  
                            type="email" 
                            id="email"
                            placeholder='Enter your email'
                            autoComplete="email"
                            disabled={isSubmitting}
                        />
                        {errors.email && (<span className='errormsg'>{errors.email.message}</span>)}

                        <label className='block form-heading font-subHeading text-xl md:text-2xl xl:text-3xl my-3' htmlFor="textbox">
                            Write your message:
                        </label>
                        <textarea {...register('message', { required: true })}  
                            rows='8' 
                            id="textbox"
                            placeholder='Enter your message'
                            disabled={isSubmitting}
                            >

                        </textarea>
                        {errors.message && (<span className='errormsg'>message is required</span>)}

                        <button type='submit' 
                                className='rounded-full pink-to-blue px-8 py-2 md:px-10 md:py-3 shadow-lg cursor-pointer text-white transition duration-300 hover:scale-105 inline-block mt-5' 
                                disabled={isSubmitting}>
                            {isSubmitting ? 'Submitting...' : 'Submit now'}
                        </button>
                    </form>
                </div>
                <div className="contact-right font-subHeading md:ml-[-35] md:py-20">
                    <h1><span className="subText-gradient">Get in touch</span></h1>
                    <ul className='icons gap-2 ml-5'>
                        <li>
                            
                            <a href="https://www.linkedin.com/in/wakanagushi" className="grid place-items-center " target="_blank">
                                <div className="rounded-full dark:bg-gray-200 grid place-items-center p-2">
                                    <Image src={linkedin_logo} alt="Linkedin"  width={15} height={15}/>
                                </div>
                            </a>
                            
                        </li>
                        <li>
                        <a href="https://github.com/Wakana-github" className="grid place-items-center" target="_blank">
                            <div className="rounded-full dark:bg-gray-200 p-2">
                                <Image src={github_logo} alt="Github" width={15} height={15}/>
                            </div  >
                        </a>
                        </li>
                    </ul>
                </div>

            
            </div>
        </FadeInSection>
        </div>
    </div>
  )
}

