import React from "react";

function SideNav() {
  return (
    <div className="fixed right-0 top-0 grid h-screen w-[20vw] grid-rows-6 border-l-[1px] border-l-slate-500">
      <a href="#intro" className="ml-1 text-lg text-white">
        Intro
      </a>
      <a href="#whatIsAGhetto" className="ml-1 text-lg text-white">
        What Is a Ghetto?
      </a>
      <a href="#typesOfGhettos" className="ml-1 text-lg text-white">
        Types Of Ghettos
      </a>
      <a href="#history" className="ml-1 text-lg text-white">
        History
      </a>
      <a href="#theFinalSolution" className="ml-1 text-lg text-white">
        The Final Solution
      </a>
      <a href="#worksCited" className="ml-1 text-lg text-white">
        Works Cited
      </a>
    </div>
  );
}

export default SideNav;
