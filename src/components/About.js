import React from 'react'
// import { motion } from "framer-motion";
import Guest from './Guest';

export default function About() {
  return (
    <div className='max-w-7xl mx-auto z-20 p-5 items-center flex flex-col'>
     <img
        className='h-40 w-30 relative'
        src='/images/track degin.png'
        alt='/'
      />
      <h1 className='text-2xl text-center text-white absolute my-20 py-5'>GUESTS</h1>

      <div className='w-full flex space-x-5 overflow-x-hidden px-10 snap-x snap-mandatory mt-5'>
       <Guest/>
       <Guest/>
       <Guest/>
       <Guest/>
      </div>
    </div>
  )
}
