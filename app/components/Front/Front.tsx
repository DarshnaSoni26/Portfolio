import Image from "next/image";
import React from "react";
import img from "./Mine1.png";
import HamburgerMenu from "../Navbar/Hamburger";

interface ProfileInfo {
  name: String;
  Designation: String;
}
export default function Front(props: ProfileInfo) {
  return (
    <>
      <div className="w-full md:min-h-screen bg-red-50 pb-10">
        <div className="md:hidden p-3">
          <HamburgerMenu />
        </div>
        <div className="border-2 rounded-full md:w-1/3 md:h-1/2 md:ml-16 md:mt-28 md:float-left w-1/2 m-auto">
          <Image
            src={img}
            alt="Picture of the author"
            style={{ borderRadius: "50%" }}
          />
        </div>
        <div className="border-y-4 rounded-lg leading-10 text-center border-t-rose-950 border-b-rose-950 border-l-amber-50 border-r-amber-50 md:float-left md:w-1/3 md:h-auto md:mt-52 md:ml-16 md:text-2xl md:p-8 w-3/4 text-xl p-4 m-auto mt-5">
          Hi I&apos;m{" "}
          <span className="md:text-4xl text-2xl font-bold text-rose-900">
            {props.name}
          </span>
          <br /> a
          <span className="font-bold text-rose-950"> {props.Designation}</span>
        </div>
      </div>
    </>
  );
}
