import CTA from "../../components/CTA";
import Hero from "../../components/Hero";
import SectionAttendEvent from "../../components/SectionAttendEvent";

export default function Home() {
  return (
    <main className="relative">
      <div className="-z-10 fixed top-0 right-0 bg-blue-400/10 size-[35rem] max-lg:size-[25rem]  max-sm:size-[15rem] blur-[100px] rounded-full" />
      <div className="-z-10 fixed -bottom-20 -left-20 bg-green-400/10 size-[35rem] max-lg:size-[25rem]  max-sm:size-[15rem] blur-[100px] rounded-full" />
      <Hero />
      <SectionAttendEvent />
      <CTA />
    </main>
  );
}
