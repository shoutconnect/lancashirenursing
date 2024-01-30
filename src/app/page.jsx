import CTA from "../../components/CTA";
import Features from "../../components/Features";
import Hero from "../../components/Hero";
import SectionAttendEvent from "../../components/SectionAttendEvent";

export default function Home() {
  return (
    <main className="relative">
      <div className="-z-10 fixed -top-32 right-0 bg-cyan-500/15 size-[40rem] max-lg:size-[25rem]  max-sm:size-[15rem] blur-[100px] rounded-full" />
      <div className="-z-10 fixed -top-96 left-20 bg-teal-500/10 size-[50rem] max-lg:size-[25rem]  max-sm:size-[15rem] blur-[100px] rounded-full" />
      <div className="-z-10 fixed -bottom-20 -left-20 bg-blue-600/15 size-[35rem] max-lg:size-[25rem]  max-sm:size-[15rem] blur-[100px] rounded-full" />
      <Hero />
      <Features />
      <SectionAttendEvent />
      <CTA />
    </main>
  );
}
