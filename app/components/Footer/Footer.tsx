import React from "react";

interface footerinfo {
  name: string;
}
export default function Footer(props: footerinfo) {
  return (
    <>
      <div
        className="md:w-5/6 md:h-auto p-5"
        style={{ background: "rgba(168, 128, 128, 0.5)" }}
      >
        <div className="flex justify-between text-lg">
          <div>copyright &copy; 2023</div>
          <div>{props.name}</div>
        </div>
      </div>
    </>
  );
}
