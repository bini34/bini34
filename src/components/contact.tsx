import Image from "next/image"
function Contact() {
  return (
    <section className="flex  items-center  p-20">
      <div className="w-[50%] flex flex-col gap-5">
      `<h1 className="text-7xl font-bold">Let&apos;s Talk</h1>
  
        <div className="flex flex-col gap-3">
            <button className="w-[400px] border-3 border-gray-500 py-4 rounded-2xl">
            Call Me
            </button>
            <button className="w-[400px] border-3 border-gray-500 py-4 rounded-2xl">
            Text Me
            </button>
        </div>
      </div>

      <div className="w-[50%]">
      <Image
        alt="contact image"
        src="/images/Pfxs865hdrQ0pxV1Ua1icMf4bs.avif"
        width={800}
        height={1000}
      />
      </div>
      
    </section>
  )
}

export default Contact
