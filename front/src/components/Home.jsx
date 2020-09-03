import React from "react";
import Navigation from "./Navigation";

import About from "./About";
import AllProjects from "./AllProjects";
import Skills from "./Skills";
import SocialMedia from "./SocialMedia";

export default function Home() {
	return (
		<>
			<SocialMedia />
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
