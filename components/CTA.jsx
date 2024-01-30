import Image from "next/image";

export default function CTA() {
  return (
    <div className="">
      <div className="relative margin-x margin-y flex flex-col items-center gap-10 ">
        <div className="flex max-lg:flex-col lg:gap-10 bg-white/10 rounded-lg overflow-hidden border-[1px] border-zinc-200/50 shadow-xl shadow-zinc-100/50">
          <div className="flex flex-col gap-10 items-start p-20 max-xl:p-12 max-lg:p-16 max-sm:px-10 max-sm:py-14 max-lg:text-center max-lg:items-center">
            <h2 className="">
              Ready to start?
              <br />
              <span className="text-blue-600">Register today your place.</span>
            </h2>
            <p className="">
              {" "}
              Are you interested in a career in nursing? To register your place,
              please e-mail{" "}
              <a
                className="text-cyan-500 font-bold"
                href="mailto:study.nursing@lthtr.nhs.uk?subject=Nursing Career Clinic&body=Hello, I would like to register a place at the Nursing Career Clinic."
              >
                study.nursing@lthtr.nhs.uk{" "}
              </a>
              with your preferred date and a member of the team will be in touch
              to confirm your place.
            </p>

            <a
              href="mailto:study.nursing@lthtr.nhs.uk?subject=Nursing Career Clinic&body=Hello, I would like to register a place at the Nursing Career Clinic."
              className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 my-transition"
            >
              Register now
            </a>
          </div>
          <div className="relative">
            <Image
              src="/Lancashire Teaching Hospitals.png"
              width={200}
              height={50}
              className="absolute bottom-8 right-8 z-[30] object-cover h-32 max-sm:h-24 w-auto"
              priority
              draggable={false}
              alt="Lancashire Teaching Hospitals"
            />
            <div className="absolute z-[20] w-full h-full bg-gradient-to-tl from-zinc-50 via-zinc-50/40 to-transparent" />
            <Image
              src="/Hero Background.png"
              width={1920}
              height={1080}
              className="relative z-10 object-cover w-auto h-full lg:mt-20 rounded-tl-3xl opacity-70"
              priority
              draggable={false}
              alt="NHS background"
            />
            <div className="absolute top-0 right-0 lg:mt-20 bg-cyan-500 w-full h-full rounded-tl-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
