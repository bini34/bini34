import About from "@/components/about";
import { CardStackDemo } from "@/components/CardStackDemo";
import Contact from "@/components/contact";
import Hero from "@/components/hero";
import WorkSlider from "@/components/workSlider";

export default function Home() {
  return (
      <main className=" flex flex-col gap-20">
        <Hero/>
        <WorkSlider/>
        <About/>
        <CardStackDemo/>
        <Contact/>
      </main>
    
  );
}
