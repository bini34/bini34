import About from "@/components/about";
import Contact from "@/components/contact";
import Hero from "@/components/hero";
import WorkSlider from "@/components/workSlider";

export default function Home() {
  return (
      <main className=" flex flex-col gap-20">
        <Hero/>
        <WorkSlider/>
        <About/>
        <Contact/>
      </main>
    
  );
}
