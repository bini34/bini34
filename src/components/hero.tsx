import Image from "next/image"
import Skills from './skills'
function Hero() {
  return (
    <section className="w-full flex justify-center">
        <div className="flex flex-col gap-10 w-[500px] items-center">
            <Image
                alt="hero image"
                src="/images/eKUFYmZPwgMN4Q1wDDraUJJmAzE.avif"
                width={300}
                height={200}
            />
            <Skills/>
            
            <h1 className="text-4xl font-sans font-normal bg-gradient-to-b text-black  bg-clip-text text-center">
            Hi, I&apos;m Biniyam 💫{" "}
            <span className="font-normal">I develop</span>{" "}
            <span className="font-semibold">Mobile Apps</span>{" "}
            <span className="font-normal">and</span>{" "}
            <span className="italic font-serif">Web Experiences</span>.
            </h1>
        </div>
      
      
    </section>
  )
}

export default Hero
