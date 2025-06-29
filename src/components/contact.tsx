import Image from "next/image"
function Contact() {
  return (
    <section className="flex  items-center  p-20">
      <div className="w-full lg:w-[50%] flex flex-col gap-20 justify-center items-center lg:items-start">
      `<h1 className="text-7xl font-bold">Get in Touch</h1>
  
        <div className="flex flex-col gap-3">
            <button className="w-[200px] border-3 border-gray-500 py-4 rounded-2xl">
            Call Me
            </button>
            <button className="w-[200px] border-3 border-gray-500 py-4 rounded-2xl">
            Text Me
            </button>
        </div>
      </div>

      <div className="w-[50%] hidden lg:block">
      <Image
        alt="contact image"
        src="/images/Pfxs865hdrQ0pxV1Ua1icMf4bs.avif"
        width={1500}
        height={1500}
      />
      </div>
      
    </section>
  )
}

export default Contact
