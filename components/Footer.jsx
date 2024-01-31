import Link from "next/link";
import {
  RiFacebookBoxFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiTwitterXFill,
  RiXboxFill,
  RiYoutubeFill,
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
          Wesbite developed by{" "}
          <Link
            href="http://www.shoutconnect.co.uk"
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
          <Link href="https://www.facebook.com/LancsHospitals/" target="blank_">
            <RiFacebookBoxFill className="size-6 text-blue-800 hover:text-blue-600 my-transition" />{" "}
          </Link>
          <Link
            href="https://www.instagram.com/lancshospitals/"
            target="blank_"
          >
            <RiInstagramFill className="size-6 text-blue-800 hover:text-blue-600 my-transition" />
          </Link>

          <Link href="https://www.youtube.com/user/LTHNHSFT" target="blank_">
            <RiYoutubeFill className="size-6 text-blue-800 hover:text-blue-600 my-transition" />{" "}
          </Link>

          <Link href="https://twitter.com/LancsHospitals" target="blank_">
            <RiTwitterXFill className="size-6 text-blue-800 hover:text-blue-600 my-transition" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
