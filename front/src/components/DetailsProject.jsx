import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Navigation from "./Navigation";
import { TitleH2 } from "../titles";
import Data from "../data/data.json";

const Container = styled.div`
	border: solid 2px ${(props) => props.theme.blue};
	box-shadow: 1rem 1rem 1px 1px ${(props) => props.theme.violet};
	width: 50%;
	height: 70vh;
	margin: 2rem auto;
	${(props) => props.theme.mediaMax.small`
    width: 80%;
    margin: 2rem auto;
    height: 100%;
  `}
`;

const Content = styled.p`
	display: flex;
	flex-basis: 40%;
	align-items: center;
	text-align: justify;
	padding: 2rem;
	${(props) => props.theme.mediaMax.small`
    padding: 1rem;
  `}
`;

const BackLink = styled.a`
	text-decoration: none;
	font-weight: bold;
	margin: 1rem 2rem;
	display: inline-block;
	color: ${(props) => props.theme.orange};
	text-transform: uppercase;
`;
export default function DetailsProject() {
	const { name } = useParams();
	return (
		<>
			<Navigation />
			<BackLink href="/">Retour</BackLink>
			<Container>
				<TitleH2>{Data[name].title}</TitleH2>
				<Content>
					{Data[name].subtitle}
					{Data[name].content1}
				</Content>
				<Content>{Data[name].languages}</Content>
				<BackLink href={Data[name].netlify} target="_blank">
					A quoi ça ressemble ?{" "}
					<span className="fas fa-arrow-circle-right"></span>
				</BackLink>
			</Container>
		</>
	);
}
