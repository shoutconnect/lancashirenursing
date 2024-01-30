"use client";
import Image from "next/image";
import Typewriter from "typewriter-effect";

export default function Hero() {
  return (
    <div className="relative bg-blue-600">
      <div className="absolute z-10 w-full h-full bg-gradient-to-tl from-blue-600 via-blue-600/10 to-transparent" />
      <Image
        src="/Hero Background.png"
        width={1920}
        height={1080}
        className="object-cover h-[70vh] max-md:h-[50vh] object-top opacity-50"
      />

      <div className="absolute margin-x bottom-0 top-0 my-auto left-0 right-0 mx-auto h-[70vh] max-md:h-[50vh] z-30 flex flex-col gap-14 items-center justify-center text-center">
        <h1 className="text-7xl max-md:text-5xl max-md:w-[80%] max-w-[750px] min-h-[220px] font-black text-white">
          <Typewriter
            options={{
              strings: [
                "Do you want to train to become a nurse?",
                "Thinking of changing your career?",
              ],
              autoStart: true,
              loop: true,
              delay: 75,
            }}
          />
        </h1>
        <p className="text-xl text-blue-100">
          Don't miss out on this unique opportunity to attend a taster session!
        </p>
      </div>
    </div>
  );
}
