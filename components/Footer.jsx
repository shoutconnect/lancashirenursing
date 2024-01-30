import Link from "next/link";
import {
  RiFacebookBoxFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
} from "react-icons/ri";

export default function Footer() {
  return (
    <footer className="margin-x margin-y flex max-lg:flex-col-reverse max-lg:text-center items-center gap-4 max-lg:gap-12 justify-between">
      <div className="flex flex-col gap-2">
        <p className="text-sm font-bold">
          Nursing Career Clinics • Lancashire Teaching Hospitals NHS Foundation
          Trust
        </p>
        <p className="text-sm">
          Wesbite developed by the team of{" "}
          <Link
            href="www.shoutconnect.co.uk"
            target="blank_"
            className="font-bold"
          >
            Shout Connect
          </Link>
          .
        </p>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
      <div className="flex flex-col items-end gap-2">
        <p>Connect with us:</p>
        <div className="flex items-center gap-2 justify-center">
          <RiLinkedinBoxFill className="size-8 text-blue-800 hover:text-blue-600 my-transition" />
          <RiFacebookBoxFill className="size-8 text-blue-800 hover:text-blue-600 my-transition" />
          <RiInstagramFill className="size-8 text-blue-800 hover:text-blue-600 my-transition" />
        </div>
      </div>
    </footer>
  );
}
