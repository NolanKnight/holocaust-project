import React from "react";
import SideNav from "./sideNav";
import Section from "./section";
import intro from "../data/intro";
import whatIsAGhetto from "../data/whatIsAGhetto";
import typesOfGhettos from "../data/typesOfGhettos";
import historyOfGhettos from "../data/historyOfGhettos";
import theFinalSolution from "../data/theFinalSolution";
import worksCited from "../data/worksCited";

function Layout() {
  const ghettoMap = require("../images/ghetto-map.gif");
  const ghettoImg1 = require("../images/ghetto-img.webp");
  const ghettoImg2 = require("../images/ghetto-img-2.webp");
  const ghettoImg3 = require("../images/ghetto-img-3.webp");
  const ghettoImg4 = require("../images/ghetto-img-4.webp");

  return (
    <div className="h-fit w-full bg-gray-900 p-8">
      <h1 className="text-5xl text-white" id="intro">
        Holocaust Project
      </h1>
      <p className="mt-2 text-white">Nolan Knight</p>
      <div className="h-px w-[80vw] -rotate-2 bg-slate-500"></div>
      <Section
        idVal=""
        text={intro}
        title="Intro"
        align="right"
        img={ghettoMap}
      />
      <Section
        idVal="whatIsAGhetto"
        text={whatIsAGhetto}
        title="What Is A Ghetto?"
        align="left"
        img={ghettoImg1}
      />
      <Section
        idVal="typesOfGhettos"
        text={typesOfGhettos}
        title="Types Of Ghettos"
        align="right"
        img={ghettoImg2}
      />
      <Section
        idVal="history"
        text={historyOfGhettos}
        title="History"
        align="left"
        img={ghettoImg3}
      />
      <Section
        idVal="theFinalSolution"
        text={theFinalSolution}
        title="The Final Solution"
        align="right"
        img={ghettoImg4}
      />
      <Section
        idVal="worksCited"
        text={worksCited}
        title="Works Cited"
        align="left"
        img=""
      />
      <SideNav />
    </div>
  );
}

export default Layout;
