import React from "react";

import { Flex } from "../mainStyle";
import styled from "styled-components";

import html from "../images/html.gif";
import css from "../images/css.gif";
import git from "../images/git.gif";
import js from "../images/js.gif";
import react from "../images/react.gif";
import node from "../images/node.gif";

const Container = styled(Flex)`
	flex-direction: column;
	width: 10%;
	margin: 2rem 3rem;

	${(props) => props.theme.mediaMax.small`
	width: 25%;
	margin: 1rem;
  `}
`;

const Img = styled.img`
	width: 100%;
`;

export default function LogoSkill() {
	return (
		<Flex aend center wrap>
			<Container acenter>
				<Img src={git} alt="git" />
				<p>GIT</p>
			</Container>
			<Container acenter>
				<Img src={html} alt="html" />
				<p>HTML5</p>
			</Container>
			<Container acenter>
				<Img src={css} alt="css" />
				<p>CSS3</p>
			</Container>
			<Container acenter>
				<Img src={js} alt="js" />
				<p>JS</p>
			</Container>
			<Container acenter>
				<Img src={react} alt="react" />
				<p>REACT</p>
			</Container>
			<Container acenter>
				<Img src={node} alt="node" />
				<p>NODEJS</p>
			</Container>
		</Flex>
	);
}
