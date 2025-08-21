// app/page.tsx
import Navbar from "@/component/home/navbar";
import Hero from "@/component/home/hero";
import SectionTwo from "@/component/home/section-two";
import SectionThree from "@/component/home/section-three";
import SectionFour from "@/component/home/section-four";
import SectionFive from "@/component/home/section-five"; 
import SectionSix from "@/component/home/section-six";
import SectionSeven from "@/component/home/section-seven";
import Footer from "@/component/home/footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <Hero />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix /> 
      <SectionSeven />
      <Footer />
    </>
  );
}
