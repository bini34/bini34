import Image from "next/image"
import Skills from './skills'

function Hero() {
  return (
    <section className="w-full flex justify-center">
        <div className="flex flex-col gap-10 w-[600px] items-center ">
          <div className="w-full flex flex-col items-center ">
              <div className="w-[400px] h-[400px] rounded-full overflow-hidden z-0 border-8 border-gray-500 ">
              <Image
                    alt="hero image"
                    src="/images/eKUFYmZPwgMN4Q1wDDraUJJmAzE.avif"
                    width={500}
                    height={500}
                />
              </div>
            <div className="z-10 -mt-10 overflow-hidden w-full">
            <Skills/>
            </div>

              
          </div>
            
            
            <h1 className="text-5xl font-sans font-normal bg-gradient-to-b text-black  bg-clip-text text-center">
            Hi, I&apos;m Biniyam{" "}
            <span style={{ filter: "grayscale(100%) brightness(0)", fontSize: "40px" }}>💫</span>
            <span className="font-normal">I develop</span>{" "}
            <span className="font-semibold">Mobile Apps</span>{" "}
            <span className="font-normal">and</span>{" "}
            <span className="italic font-serif">Web <br/> Experiences</span>.
            </h1>
        </div>
      
      
    </section>
  )
}

export default Hero
