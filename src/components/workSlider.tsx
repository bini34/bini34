import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards'
import WorkCard from './workCard'

function WorkSlider() {
    const brandLogos = [
        { src: '/images/mlO56hcZ2tRpiredp0Ybs7avJk.avif', alt: 'Brand Logo 1' },
        { src: '/images/mlO56hcZ2tRpiredp0Ybs7avJk.avif', alt: 'Brand Logo 2' },
        { src: '/images/mlO56hcZ2tRpiredp0Ybs7avJk.avif', alt: 'Brand Logo 3' },
        { src: '/images/mlO56hcZ2tRpiredp0Ybs7avJk.avif', alt: 'Brand Logo 4' },
        { src: '/images/mlO56hcZ2tRpiredp0Ybs7avJk.avif', alt: 'Brand Logo 5' },
      ]
    
      return (
        <section>
            <div className='w-full lg:pl-16 pl-10 font-bold lg:text-9xl text-6xl'>
                <h1>MY WORK</h1>
            </div>
            <div className="h-[30rem]  flex flex-col antialiased bg-transparent items-center justify-center w-full overflow-hidden p-0 ">
                <InfiniteMovingCards
                    items={brandLogos}
                    direction="right"
                    speed="slow"
                    height = '20rem'
                />
            </div>
            <div className='flex flex-col gap-15'>
            <WorkCard/>
            <WorkCard/>
            <WorkCard/>
            </div>
            
       </section>
  )
}

export default WorkSlider
