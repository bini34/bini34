import Image from "next/image"
function Contact() {
  return (
    <section className="flex flex-col items-center gap-10 my-52">
      <h1 className="text-7xl font-bold">Let&apos;s Talk</h1>
      <Image
        alt="contact image"
        src="/images/EmuvegPaOi1AQEF6LHkqEr04J9Y.avif"
        width={800}
        height={1000}
      />
        <div className="flex flex-col gap-3">
            <button className="w-[700px] border-3 border-gray-500 py-8 rounded-2xl">
            Call Me
            </button>
            <button className="w-[700px] border-3 border-gray-500 py-8 rounded-2xl">
            Text Me
            </button>
        </div>
    </section>
  )
}

export default Contact
