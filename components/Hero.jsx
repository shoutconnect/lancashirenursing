"use client";
import Image from "next/image";
import Typewriter from "typewriter-effect";

export default function Hero() {
  return (
    <div>
      <div className="relative bg-gradient-to-r from-teal-600/50 via-cyan-500 to-blue-600 overflow-hidden">
        <div className=" select-none absolute z-10 w-full h-full bg-gradient-to-r from-teal-600/50 via-cyan-500 to-blue-600 opacity-60" />
        <Image
          src="/NHS (1).png"
          width={1920}
          height={1080}
          className="absolute top-0 left-0 object-cover w-full h-full opacity-80  select-none "
          draggable={false}
          alt="NHS background"
          priority
        />

        <section className="relative z-[30] flex max-lg:flex-col max-lg:items-center  lg:gap-20 margin-x">
          <div className="w-1/2 max-xl:w-[60%] max-lg:w-full py-24 max-sm:pt-16 flex flex-col gap-14 items-start max-lg:items-center max-lg:text-center justify-center">
            <h1 className="text-7xl min-h-[300px] max-lg:min-h-[225px] max-md:min-h-[100px] max-sm:min-h-[150px] max-lg:w-full max-md:text-5xl font-black text-white">
              <Typewriter
                options={{
                  strings: [
                    "Do you want to train to become a nurse?",
                    "Thinking of changing your career?",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                }}
              />
            </h1>
            <p className="w-[60%] text-xl text-blue-100">
              Don't miss out on this unique opportunity to attend a taster
              session!
            </p>
          </div>
          <div className="w-[900px] max-xl:w-[700px] max-lg:w-[60%] max-md:w-[100%] max-lg:-mt-10 lg:absolute lg:z-[50] lg:bottom-0 lg:right-0">
            <Image
              src="/NHS (2).png"
              width={900}
              height={500}
              className="object-cover select-none "
              draggable={false}
              alt="NHS background"
              priority
            />
          </div>
        </section>
      </div>
    </div>
  );
}
