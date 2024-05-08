import React from "react";

export default function About() {
  return (
    <>
      <div
        id="about"
        className=" bg-orange-50 md:w-5/6 md:h-auto md:px-0 p-5 px-8"
      >
        <h1 className=" md:text-4xl text-3xl text-red-950 font-bold text-center uppercase">
          About
        </h1>
        <div className="text-justify md:text-xl text-lg leading-9 md:p-10 py-4">
          <p className="text-center">
            <span className=" italic">
              <span className="md:text-2xl text-xl font-bold">
                Web Developer
              </span>{" "}
              with a Passion for Crafting Exceptional Frontends, Fueling
              Innovation, and Achieving Excellence.
            </span>{" "}
            &#128640; Web developer with a penchant for creating mesmerizing
            <span className="md:text-2xl text-xl font-bold">
              {" "}
              frontends
            </span>{" "}
            &#127912;. I &apos;m on a relentless journey of tech exploration
            &#127760;, continually honing my skills to drive my career forward.
            I aspire to grow alongside a forward-thinking company &#127775;,
            contributing to both my personal development and the achievement of
            our shared goals &#128640;.
          </p>
        </div>
      </div>
    </>
  );
}
