import React from "react";
import { Flex } from "../mainStyle";
import styled from "styled-components";
import pp from "../images/alice.jpg";

const ContainerParts = styled.div`
	flex-basis: 40%;
	margin-right: 1rem;

	${(props) => props.theme.mediaMax.small`
	width: 90%;
	margin-right: 0;
  `}
`;

const PartOne = styled.img`
	width: 100%;
	height: 100%;
`;

const PartTwo = styled.p`
	display: flex;
	flex-basis: 40%;
	align-items: center;
	text-align: center;
	border: solid 1px ${(props) => props.theme.orange};
	padding: 1rem;

	${(props) => props.theme.mediaMax.small`
    margin-top: 2rem;
    margin-right: 0;
    width: 80%;
	`}
`;

export default function About() {
	return (
		<Flex center mobileacenter mobilefd mobilehgt W90 mt2>
			<ContainerParts>
				<PartOne src={pp} alt="alice" />
			</ContainerParts>
			<PartTwo>
				Bienvenue sur mon site perso ! Crée sur deux jours lors d'un hackathon
				mis en place par mon école, je vous présente ici les projets que j'ai
				réalisé. Qui suis-je ? Je m'appelle Alice Hamel et je suis etudiante a
				la Wild Code School. Après quelques années en faculté d'économie et de
				gestion, j'ai décidé de suivre une nouvelle voie et de me former dans le
				secteur du digital, plus particulièrement dans le développement web. To
				be continued...
			</PartTwo>
		</Flex>
	);
}
