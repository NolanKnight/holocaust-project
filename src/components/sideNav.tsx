import React from "react";

function SideNav() {
  return (
    <div className="fixed right-0 top-0 w-[20vw] h-screen border-l-[1px] border-l-slate-500 grid grid-rows-5">
      <a href="#intro" className="text-white text-lg ml-1">
        Intro
      </a>
      <a href="#whatIsAGhetto" className="text-white text-lg ml-1">
        What Is a Ghetto?
      </a>
      <a href="#typesOfGhettos" className="text-white text-lg ml-1">
        Types Of Ghettos
      </a>
      <a href="#history" className="text-white text-lg ml-1">
        History
      </a>
      <a href="#theFinalSolution" className="text-white text-lg ml-1">
        The Final Solution
      </a>
    </div>
  );
}

export default SideNav;
