import Image from "next/image"
function About() {
  return (
    <section className="w-full px-42 flex flex-col gap-10 ">
        <h1 className="text-center font-bold text-7xl "> ABOUT ME</h1>
        <p className="text-xl font-semibold">Hi there! I&apos;m Dylan Croft, a passionate UI/UX designer and developer hailing from the vibrant city of Toronto, Canada. With years of hands-on experience and practical knowledge, I&apos;ve had the privilege of working with top companies in the industry, honing my skills and crafting engaging digital experiences. My journey in design and development has equipped me with a deep understanding of user-centered design principles and a keen eye for detail. Outside of my professional endeavors, I&apos;m also a part-time content creator, sharing insights and tutorials on design and development through various online platforms. I thrive on the creative process, constantly seeking innovative solutions to challenges and striving to deliver impactful results. Let&apos;s collaborate and bring your digital vision to life!</p>
        <div className="w-full flex flex-col justify-center items-center ">
            <h2 className="text-xl font-bold mb-4">Biniyam Ambachew</h2>
            <div >
            <div className="h-[30rem] w-0.75 border-dashed border-1 border-gray-500 absolute z-0"></div>

            </div>
            <div className="flex flex-col gap-32 z-10 mt-32">
            <div className="w-[500px] min-h-[200px] bg-white border-4 border-gray-500 z-10 p-5 rounded-2xl flex flex-col gap-3">
                <div className="flex justify-between border-b-4 border-gray-400 pb-3">
                    <div className="flex gap-2">
                        <div className="flex items-center">
                            <Image
                            alt="company logo"
                            src="/images/mlO56hcZ2tRpiredp0Ybs7avJk.avif"
                            width= "32"
                            height= "32"
                            className=""
                            />
                        </div>
                     
                        <div className="flex flex-col">
                            <h3 className="font-bold text-lg">Company Name</h3>
                            <p className="text-gray-500">Position</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <p className="bg-green-500  text-white rounded-lg px-2 py-1">Internship</p>
                    </div>
                </div>
                <p className="text-md font-semibold"> I had the incredible opportunity to dive deep into the world of cross-platform app development. Collaborating with a talented team of engineers and designers, I contributed to the development of cutting-edge mobile applications using Flutter framework.</p>
                <p className="text-[0.8rem]">2005-2006</p>
            </div>

            <div className="w-[500px] min-h-[200px] bg-white border-4 border-gray-500 z-10 p-5 rounded-2xl flex flex-col gap-3">
                <div className="flex justify-between border-b-4 border-gray-400 pb-3">
                    <div className="flex gap-2">
                        <div className="flex items-center">
                        <Image
                        alt="company logo"
                        src="/images/mlO56hcZ2tRpiredp0Ybs7avJk.avif"
                        width= "32"
                        height= "32"
                        className=""
                        />
                        </div>
                     
                        <div className="flex flex-col">
                            <h3 className="font-bold text-lg">Company Name</h3>
                            <p className="text-gray-500">Position</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                    <p className="bg-green-500  text-white rounded-lg px-2 py-1">Internship</p>

                    </div>
                </div>
                <p className="text-md font-semibold"> I had the incredible opportunity to dive deep into the world of cross-platform app development. Collaborating with a talented team of engineers and designers, I contributed to the development of cutting-edge mobile applications using Flutter framework.</p>
                <p className="text-[0.8rem]">2005-2006</p>
            </div>
            </div>

            </div>
    </section>
  )
}

export default About
