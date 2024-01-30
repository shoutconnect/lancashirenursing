import { CheckIcon, CheckCircleIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

export default function Features() {
  const includedFeatures = [
    "Chat to our clinical nurse tutors",
    "Explore our different learning environments ",
    "Find out more about how to develop your career",
    "Gain support to take the next steps",
  ];
  const secondIncludedFeatures = [
    "Clinical skills teaching sessions",
    "Nursing skills teaching sessions",
    "Departmental visits within the Trust",
  ];

  return (
    <div className="margin-x margin-y">
      <div className="rounded-3xl ring-1 ring-zinc-200 lg:flex lg:max-w-none bg-white/30">
        <div className="p-8 sm:p-10 lg:flex-auto">
          <h2 className="text-blue-600">
            Do you want to start a <br className="max-xl:hidden" /> career in
            healthcare?
          </h2>
          <p className="mt-6">
            But still not sure if you would like the hospital environment? Or
            doy you want to make an informed choice? Join us for a{" "}
            <span className="font-bold text-zinc-700">
              {" "}
              Nursing Career Clinic
            </span>{" "}
            to find out more about the different nursing roles available at NHS
            Lancashire Teaching Hospitals.
          </p>
          <div className="mt-10 flex items-center gap-x-4">
            <h5 className="flex-none  ">This is a great opportunity to:</h5>
            <div className="h-px flex-auto bg-zinc-100" />
          </div>
          <ul role="list" className="mt-8 grid grid-cols-1 gap-4">
            {includedFeatures.map((feature) => (
              <li key={feature} className="flex gap-x-3">
                <CheckIcon
                  className="h-6 w-5 flex-none text-blue-600 mt-1"
                  aria-hidden="true"
                />
                <p>{feature}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
          <div className="rounded-2xl bg-zinc-50 p-10 text-center ring-1 ring-inset ring-zinc-900/5 lg:flex lg:flex-col lg:justify-center">
            <div className="relative rounded-lg overflow-hidden">
              <Image
                src="/Hero Background.png"
                width={700}
                height={700}
                className=" relative z-10 opacity-70 scale-x-110 w-full h-[200px] object-cover object-top"
                draggable={false}
                alt="NHS Lancashire Teaching Hospitals"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-teal-600 via-cyan-500 to-blue-600" />
            </div>
            <h5 className="flex-none mt-8">
              Attend a weekend session to experience some:
            </h5>{" "}
            <ul role="list" className="mt-8 grid grid-cols-1 gap-4">
              {secondIncludedFeatures.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckCircleIcon
                    className="h-6 w-5 flex-none text-cyan-500 mt-1"
                    aria-hidden="true"
                  />
                  <p>{feature}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
