import React from 'react'
import { SocialIcon } from "react-social-icons"

export default function Episode(props) {
  return (
    <div className='p-5 my-2 bg-[#1e2320] flex flex-row rounded-lg'>
         <img
            className='w-30 h-60 mt-7'
            src='/images/podcast is out post.png'
            alt='/'
         />
         <div className='m-5 p-5'>
          <h1 className='text-red-500 text-3xl font-bold mb-10'>{props.title}</h1>
          <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <div className='flex flex-row space-x-5 mt-5'>
           <SocialIcon
            className='text-lg'
            url='https://www.youtube.com/channel/UC5IVJQuG2iFmysir2RNRVSw'
            fgColor="#eb4034"
            bgColor="transparent"
           />
           <SocialIcon
            url='https://open.spotify.com/show/0RlQigGr31JbgjdkIVbPZY'
            fgColor="#1ED760"
            bgColor="transparent"
          />
          </div>
         </div>
         
       </div>
  )
}
