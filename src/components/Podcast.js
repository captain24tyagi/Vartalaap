import React from 'react'
import { SocialIcon } from "react-social-icons"
import Episode from './Episode'

export default function Podcast() {
  return (
    <div className='max-w-7xl mx-auto z-20 p-5 items-center flex flex-col'>
      <img
        className='h-40 w-30 relative'
        src='/images/track degin.png'
        alt='/'
      />
      <h1 className='text-2xl text-center text-white absolute my-20 py-5'>OUR PODCASTS</h1>
     
      <div className='max-w-fit'>
       <Episode
        title='Episode 1 ft. Prayasu'
        image=''

       />
       <Episode/>
       <Episode/>
       <Episode/>
      </div>
    </div>
  )
}
