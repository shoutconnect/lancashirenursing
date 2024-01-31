import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <navbar className="">
      <div className="bg-white/70">
        <div className="margin-x py-4 flex items-center justify-between">
          <Image
            src="/Lancashire Teaching Hospitals.png"
            width={160}
            height={80}
            draggable={false}
            className="object-cover h-12 w-auto"
          />
          <div className="flex items-center gap-6">
            <Link href="#clinic-dates">
              <p className="font-semibold text-sm hover:underline my-transition">
                {" "}
                Clinics
              </p>
            </Link>
            <a
              href="mailto:study.nursing@lthtr.nhs.uk?subject=Nursing Career Clinic&body=Hello, I would like to register a place at the Nursing Career Clinic."
              className="rounded-md bg-blue-600 px-3.5 py-2.5 text-xs font-semibold text-white shadow-sm hover:bg-blue-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Register now
            </a>
          </div>
        </div>
      </div>
    </navbar>
  );
}
