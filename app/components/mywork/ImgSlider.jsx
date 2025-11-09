"use client";
import React, { useState, useEffect } from 'react'
import Image from 'next/image';
import { motion } from "motion/react"

import home_img from'@/public/mywork/scoreApp/home_img.png'
import chooseGame_img from'@/public/mywork/scoreApp/chooseGame2.png'
import custom_img from'@/public/mywork/scoreApp/custom.png'
import gorup_img from'@/public/mywork/scoreApp/group.png'
import login_img from'@/public/mywork/scoreApp/login.png'
import registerGroup_img from'@/public/mywork/scoreApp/registerGroup.png'
import subscPopUp_img from'@/public/mywork/scoreApp/subscPopUp.png'
import total_img from'@/public/mywork/scoreApp/total.png'
import stats_img from'@/public/mywork/scoreApp/statistics.png'
import { GoChevronLeft } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";



const ImgSlider = () => {
    const [positionIndex, setPositionIndex] = useState([0,1,2,3,4,5,6,7,8])

    // Automatically changing cards
    // useEffect(() => {
    //     const interval = setInterval(() =>{
    //         setPositionIndex((prevIndexes) => {
    //         const updatedIndexes = prevIndexes.map((prevIndex) => (prevIndex + 1) % 9)
    //         return updatedIndexes
    //         })
    //     }, 4500); 
    //     return () => clearInterval(interval);
    // }, []);   
 
    const images = [
        home_img, chooseGame_img, total_img, custom_img, stats_img, gorup_img, 
        registerGroup_img, login_img,  subscPopUp_img,   
    ]

    const positions = [
        'center',
        'left4',
        'left3',
        'left2',
        'left1',
        'right1',
        'right2',
        'right3',
        'right4',
    ]

    const imgVariants = {
        center: {x: '5%', scale:1.0, zIndex: 10},
        left4: {x: '-30%', scale:0.7, zIndex: 7},
        left3: {x: '-40%', scale:0.6, zIndex: 5},
        left2: {x: '-60%', scale:0.4, zIndex: 3},
        left1: {x: '-80%', scale:0.3, zIndex: 2},
        right1: {x: '80%', scale:0.3, zIndex: 2},
        right2: {x: '60%', scale:0.4, zIndex: 3},
        right3: {x: '40%', scale:0.6, zIndex: 5},
        right4: {x: '30%', scale:0.7, zIndex: 7},
    }

    //forward
    const nextSlide = () => {
        setPositionIndex((prev) => prev.map((i) => (i + 1) % positions.length));
    };

    // back
    const prevSlide = () => {
        setPositionIndex((prev) =>
        prev.map((i) => (i - 1 + positions.length) % positions.length)
        );
    };


  return (
    <div className="flex items-center justify-center">
        {/* Button to back */}
         <button
            onClick={prevSlide}
            className="absolute left-5 sm:left-20 md:left-35 lg:left-65 z-20 text-black bg-white/70 hover:bg-white rounded-full p-2 shadow-md"
        >
            <GoChevronLeft size={25} />
        </button>

        {/* images */}
        {images.map((image, index) =>(
            <motion.div
                key={index}
                initial="center"
                animate={positions[positionIndex[index]]}
                variants={imgVariants}
                transition={{duration:0.4}}
                className="w-[80%] sm:w-[60%] md:w-[45%] absolute left-1/2 -translate-x-1/2"
            >
                <Image
                    src={image}
                    alt={`Slide ${index}`}
                    className="rounded-xl object-contain max-h-[350px] w-auto"
                />
            </motion.div>
        ))}

        {/* Button to forward */}
        <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-20 md:right-35 lg:right-65 z-20 text-black bg-white/70 hover:bg-white rounded-full p-2 shadow-md"
        >
            <GoChevronRight size={25} />
        </button>
    
    </div>
)}
export default ImgSlider