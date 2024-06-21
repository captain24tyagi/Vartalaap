import React from 'react'
import { motion } from "framer-motion";

export default function Guest({}) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-5 flex-shrink-0 w-[400px]
     md:w-[200px] mt-5 md:mt-10 xl:w-[450px] snap-center p-10 md:p-10 bg-[#1e2320] hover:opacity-100 opacity-90 
     transition-opacity duration-200 overflow-hidden cursor-pointer text-white'>
        <motion.img
          initial={{
            opacity: 0,
            y: -100
          }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, y: 1 }}
          viewport={{ once: true }}
          className='w-24 h-24 md:w-28 md:h-28 rounded-full object-cover object-top'
          src='/images/VARTAA.jpg'
          alt='/'
        />

        <div className='px-0 md:px-10'>
           <h4 className='md:text-3xl text-md font-light text-yellow-400'>Sarthak Tyagi</h4>
           <p className='font-bold text-xs md:text-2xl mt-1'>Co-Founder</p>
           <p className='uppercase py-5 text-sm md:text-lg text-white'>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
           
        </div>
        </article>
  )
}