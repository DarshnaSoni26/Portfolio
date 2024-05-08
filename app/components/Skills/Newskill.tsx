import React from "react";

interface SkillsInfo {
  name: string;
}
export default function Newskill(props: SkillsInfo) {
  return (
    <>
      <div className="border-y-4 border-t-yellow-800 rounded-3xl text-center font-serif p-6 font-bold md:text-xl text-sm md:w-1/6 md:h-20 md:m-10 w-1/3 mx-5 my-5 hover:md:text-2xl hover:text-rose-600 duration-300">
        {props.name}
      </div>
    </>
  );
}
