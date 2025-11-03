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




const ImgSlider = () => {
    const [positionIndex, setPositionIndex] = useState([0,1,2,3,4,5,6,7,8])

    useEffect(() => {
        const interval = setInterval(() =>{
            setPositionIndex((prevIndexes) => {
            const updatedIndexes = prevIndexes.map((prevIndex) => (prevIndex + 1) % 9)
            return updatedIndexes
            })
        }, 2500); 
        return () => clearInterval(interval);
    }, []);   
 
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
        center: {x: '0%', scale:1, zIndex: 10},
        left4: {x: '-20%', scale:0.8, zIndex: 7},
        left3: {x: '-40%', scale:0.6, zIndex: 5},
        left2: {x: '-60%', scale:0.5, zIndex: 3},
        left1: {x: '-90%', scale:0.4, zIndex: 2},
        right1: {x: '90%', scale:0.4, zIndex: 2},
        right2: {x: '60%', scale:0.5, zIndex: 3},
        right3: {x: '40%', scale:0.6, zIndex: 5},
        right4: {x: '20%', scale:0.8, zIndex: 7},
    }


  return (
    <div className="flex items-center flex-col justify-center">
       {images.map((image, index) =>(
            <motion.div
                key={index}
                initial="center"
                animate={positions[positionIndex[index]]}
                variants={imgVariants}
                transition={{duration:0.4}}
                className="w-[75%] sm:w-[53%] md:w-[55%] absolute"
            >
                <Image
                    src={image}
                    alt={`Slide ${index}`}
                    className="rounded-xl object-contain max-h-[350px] w-auto"
                />
            </motion.div>

        ))}
    
    </div>
)}
export default ImgSlider