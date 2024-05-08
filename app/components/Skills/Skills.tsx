import React from "react";
import Newskill from "./Newskill";

export default function Skills() {
  const skillsname = [
    "HTML",
    "CSS",
    "Bootstrap",
    "Tailwind",
    "JS",
    "TypeScript",
    "ReactJS",
    "NextJS",
    "PHP",
    "SQL",
  ];

  return (
    <div id="skills" className="bg-amber-50 md:w-5/6 h-auto p-5">
      <h1 className="md:text-4xl text-3xl text-red-950 font-bold text-center uppercase">
        Skills
      </h1>
      <div className="flex flex-wrap justify-center py-4 md:py-0">
        {skillsname.map((Skills, index) => (
          <Newskill key={index} name={Skills} />
        ))}
      </div>
    </div>
  );
}
