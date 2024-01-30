import Image from "next/image";

export default function Navbar() {
  return (
    <navbar className="">
      <div className=" bg-blue-700">
        <div className="margin-x py-2 flex items-center justify-between">
          <Image
            src="/Lancashire Teaching Hospitals (white).png"
            width={200}
            height={50}
            className="object-cover h-12 w-auto"
          />
          <a
            href="mailto:study.nursing@lthtr.nhs.uk?subject=Nursing Career Clinic&body=Hello, I would like to register a place at the Nursing Career Clinic."
            className="rounded-md bg-blue-50 px-3.5 py-2.5 text-xs font-semibold text-blue-600 shadow-sm hover:bg-blue-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Register now
          </a>
        </div>
      </div>
    </navbar>
  );
}
