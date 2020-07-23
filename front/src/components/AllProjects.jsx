import React from "react";
import Project from "./Project";
import Project2 from "./Project2";
import Project3 from "./Project3";
import { Flex, TitleH2 } from "../mainStyle";

export default function AllProjects() {
  return (
    <div style={{ marginBottom: "3rem" }}>
      <TitleH2>Mes projets</TitleH2>
      <Flex mobilefd se>
        <Project linkTo="/NDEFans" />
        <Project2 linkTo="/Arsenic-Cocktail" />
        <Project3 linkTo="/Forope" />
      </Flex>
    </div>
  );
}
