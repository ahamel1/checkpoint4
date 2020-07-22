import React from "react";
import Project from "./Project";
import Project2 from "./Project2";
import Project3 from "./Project3";
import { Flex, TitleH2 } from "../mainStyle";

export default function AllProjects() {
  return (
    <div>
      <TitleH2>Mes projets</TitleH2>
      <Flex mobilefd>
        <Project />
        <Project2 />
        <Project3 />
      </Flex>
    </div>
  );
}
