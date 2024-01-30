import {
  AcademicCapIcon,
  BuildingOfficeIcon,
  CalendarDaysIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/16/solid";
import Image from "next/image";

export default function CardEvent({ item }) {
  return (
    <div
      className={`group z-40 hover:scale-95 my-transition relative bg-white flex flex-col items-center rounded-lg overflow-hidden shadow-xl  border border-zinc-200/70
    ${
      item.location === "Microsoft Teams"
        ? "shadow-blue-300/5"
        : item.location === "Preston College"
        ? "shadow-green-300/5"
        : "shadow-zinc-600/5"
    }
    `}
    >
      <Image
        src={item.image}
        width={300}
        height={100}
        className="w-full h-56 object-cover curved-bottom group-hover:scale-105 my-transition"
        draggable={false}
      />
      <div className="flex flex-col items-center p-6">
        {item.location === "Microsoft Teams" ? (
          <div className="relative z-20 mb-6 -mt-11 flex items-center gap-2 h-10 w-auto px-6 bg-blue-50 border border-blue-200/50 rounded-md">
            {" "}
            <ComputerDesktopIcon className="size-4 text-blue-600" />
            <p className="text-sm font-semibold text-blue-600">
              {" "}
              Online meeting
            </p>
          </div>
        ) : item.location === "Preston College" ? (
          <div className="relative z-20 mb-6 -mt-11 flex items-center gap-2 h-10 w-auto px-6 bg-green-50 border border-green-200/50 rounded-md">
            {" "}
            <AcademicCapIcon className="size-4 text-green-600" />
            <p className="text-sm font-semibold text-green-600">
              {" "}
              In-person meeting
            </p>
          </div>
        ) : null}
        <p className="font-bold text-lg text-zinc-700"> {item.location}</p>
        <div className="flex items-center  gap-2">
          <CalendarDaysIcon
            className={`size-5 ${
              item.location === "Microsoft Teams"
                ? "text-blue-600"
                : item.location === "Preston College"
                ? "text-green-600"
                : "text-gray-600"
            }`}
          />

          <div className="flex font-semibold">
            <p>{item.day}</p>
            <p className="mx-2"> | </p>
            <p> {item.time}</p>
          </div>
        </div>
      </div>

      <div
        className={`w-full text-center border-t border-zinc-200/70 ${
          item.location === "Microsoft Teams"
            ? "bg-blue-100/40 group-hover:bg-blue-500 my-transition"
            : item.location === "Preston College"
            ? "bg-green-100/40 group-hover:bg-green-500 my-transition"
            : "bgzinc-100/70"
        }`}
      >
        <a
          href={`mailto:study.nursing@lthtr.nhs.uk?subject=Nursing Career Clinic&body=Hello, I would like to register a place at the Nursing Career Clinic on ${item.day} (${item.time}).`}
        >
          <p className="px-6 py-4 font-semibold text-sm group-hover:text-white my-transition">
            Register your place
          </p>
        </a>
      </div>
    </div>
  );
}
