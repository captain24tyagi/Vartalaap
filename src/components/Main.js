import React from 'react'
import { motion } from "framer-motion";

export default function Main() {
  return (
    <div className='max-w-7xl mx-auto z-20 p-5'>
       <motion.h1 
        initial={{
              x: -500,
              opacity: 0,
              scale: 0.5
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1
            }}
            transition={{
              duration: 1.5,
        }}
        className='text-5xl mx-5 my-10 p-5 rounded-lg text-white text-center font-bold'>VARTALAAP PODCAST</motion.h1>
       <div className='flex flex-row mx-5 my-10 p-5 bg-[#1e2320] rounded-lg'>
        <img
         className='h-80 w-80 pl-12'
         src='/images/VARTALAAP LOGO.png'
         alt='/'
        />
        <p className='text-xl rounded-lg text-cyan-200 pt-5 pl-5 pr-5'>
       🎙️India’s first college level podcast with an aim to lead a path for freshers as well as high school grads who are planning to pursue a career in Tech. Unlike other podcasts, it is focused upon calling the actual final year, pre-final year techies and graduates as guests and to have a ‘Vartalaap’ or conversation. Vartalaap is focused to provide a right path to the freshers in their initial stages, driving them in right direction, providing them with accurate resources and preventing the wastage of their time. We believe that our podcasts will be insightful for college peeps and will definitely ring out the best in them from all aspects.
       Learn from Experienced tech nerds. Join us as we navigate the exciting, sometimes chaotic, world of college and tech together. We'll laugh, we'll learn, we'll grow, and who knows, maybe we'll even build the next big thing.🎥
       </p>
       </div>
       
    </div>
  )
}