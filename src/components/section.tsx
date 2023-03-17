import React from "react";

function Section({ idVal, text, title, align, img }) {
  const alignClass = align === "right" ? "end" : "start";
  const alignText = align === "right" ? "left" : "right";
  const divAngle = align === "right" ? "rotate-2" : "-rotate-6";
  const angle = align === "right" ? "-rotate-2" : "rotate-6";
  const border = align === "right" ? "[20vw]" : "[80vw]";

  return (
    <div
      id={idVal}
      className={`mb-[80vh] w-full h-fit text-${alignText} grid place-items-${alignClass}`}
    >
      <div
        className={`text-4xl text-white text-start mt-16 mr-[15vw] border-b-[1px] border-b-slate-500 w-${border} pl-5 
          ${divAngle}`}
      >
        <h2 className={`mr-[4vw] ${angle}`}>{title}</h2>
      </div>
      <p className="text-white text-lg w-[38vw] mr-[28vw] mt-8 whitespace-pre-line">
        {text}
      </p>
      <img src={img} alt="" className="mr-[30vw] mt-4 w-[38vw]" />
    </div>
  );
}

export default Section;
