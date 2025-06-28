import Header from "@/components/header";
import Hero from "@/components/hero";
import WorkSlider from "@/components/workSlider";

export default function Home() {
  return (
    <>
   <Header/>
   <main className=" flex flex-col gap-20">
    <Hero/>
    <WorkSlider/>
   </main>
    </>
    
  );
}
