import { InfiniteMovingCards } from "./ui/infinite-moving-cards"

function Skills() {
    const brandLogos = [
        { src: '/images/logos/logo.png', alt: 'Brand Logo 1' },
        { src: '/images/logos/logo.png', alt: 'Brand Logo 2' },
        { src: '/images/logos/logo.png', alt: 'Brand Logo 3' },
        { src: '/images/logos/logo.png', alt: 'Brand Logo 4' },
        { src: '/images/logos/logo.png', alt: 'Brand Logo 5' },
      ]
    
      return (
      
        <div className="h-[5rem] rounded-md flex flex-col antialiased bg-transparent items-center justify-center w-full overflow-hidden p-0  ">
            <InfiniteMovingCards
                items={brandLogos}
                direction="right"
                speed="slow"
            />
        </div>
    
          
      )
  
}

export default Skills
