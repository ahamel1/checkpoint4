import React from "react";
import Navigation from "./Navigation";

import About from "./About";

export default function Home() {
  return (
    <>
      <header>
        <Navigation />
        <About />
      </header>
    </>
  );
}
