import Link from "next/link";
import React from "react";

interface NavProps {
  name: string;
  link: any;
}

function Nav(props: NavProps) {
  return (
    <>
      <div className="text-white w-1/2 m-16 text-center uppercase hover:overline decoration-red-400">
        <Link href={props.link}>{props.name}</Link>
      </div>
    </>
  );
}

export default Nav;
