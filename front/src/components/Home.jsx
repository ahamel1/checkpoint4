import React from "react";
import Navigation from "./Navigation";

import About from "./About";
import AllProjects from "./AllProjects";
import Skills from "./Skills";

export default function Home() {
  return (
    <>
      <header>
        <Navigation />
        <About />
      </header>
      <main>
        <AllProjects />
        <Skills />
      </main>
    </>
  );
}
