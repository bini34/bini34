import React from 'react'
import Image from 'next/image'
import { BackgroundGradient } from './ui/background-gradient'

function WorkCard() {
    return (
        <div className="relative flex items-center justify-center  bg-white overflow-visible w-full">
          
          {/* Background Text */}
          <h1 className="absolute text-[8rem] font-stretch-expanded md:text-[16rem] lg:block hidden font-extrabold text-center text-gray-700 tracking-[5rem] opacity-10 z-0 select-none">
            JYSEIFY</h1>
    
          {/* Rotating Card */}
          <div className="z-10 transition-transform duration-700 ease-in-out md:hover:rotate-0 md:rotate-12  hover:scale-105 cursor-pointer  ">
            <h1 className='mb-3 ml-3'>JYSEIFY</h1>
            <BackgroundGradient className='rounded-2xl shadow-2xl'>
            <Image
              src="/images/0QxnW2xKsEl2T7B8elNMuh3Mwqk.avif"
              alt="Jyseify"
              width={600}
              height={800}
              className="rounded-3xl md:w-[600px] md:h-[400px] w-[350px] h-[350px]"
            />
            </BackgroundGradient>
          </div>
        </div>
      )
}

export default WorkCard
