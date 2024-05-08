import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

export default function Page() {
  return (
    <>
      <div className="bg-orange-50 md:w-full h-screen p-36 px-16 text-center text-red-800">
        <h1 className="md:text-5xl text-3xl text-red-950 font-bold text-center uppercase">
          My Resume
        </h1>
        <div className="flex items-center justify-center text-center md:text-3xl text-sm leading-9 md:p-10 text-black">
          <Link href="https://drive.google.com/file/d/10zZm4BFkz2-4hzVkVHymY_7rZKEOJ1MG/view?usp=sharing">
            <div className=" md:px-4 md:py-2 flex items-center">
              <FontAwesomeIcon icon={faDownload} className="md:w-9 w-8" />
              <span>Download Resume</span>
            </div>
          </Link>
        </div>
        <Link href="/">
          <p>&larr; Back to Profile</p>
        </Link>
      </div>
    </>
  );
}
