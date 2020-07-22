import React from "react";
import Navigation from "./Navigation";

import About from "./About";
import AllProjects from "./AllProjects";

export default function Home() {
  return (
    <>
      <header>
        <Navigation />
        <About />
      </header>
      <main>
        <AllProjects />
      </main>
    </>
  );
}
