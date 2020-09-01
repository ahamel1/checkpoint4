import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Flex } from "../mainStyle";
import { TitleH1 } from "../titles";
import BurgerMenu from "./BurgerMenu";
import cvPdf from "../data/CV 2019 ALTERNANCE.pdf";

const NavContainer = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	background: #badac9;
	${(props) => props.theme.mediaMax.small`
    padding: 1rem 0;
  `}
`;

const ButtonNav = styled(Link)`
	border: none;
	background: none;
	font-size: 1rem;
	text-decoration: none;
	color: black;
	&:hover {
		color: #678a77;
	}
`;
const ButtonNavLink = styled.a`
	border: none;
	background: none;
	font-size: 1rem;
	text-decoration: none;
	color: black;
	&:hover {
		color: #678a77;
	}
`;

export default function Navigation() {
	return (
		<NavContainer>
			<BurgerMenu />
			<Flex center flexb70 mobilefd mobilemr>
				<Flex center mobileml0>
					<TitleH1 to="/">Alice Hamel</TitleH1>
				</Flex>
				<Flex flexend acenter se mr3 mobilemr mobilebm>
					<ButtonNavLink href="#mesprojets">Projets</ButtonNavLink>
					<ButtonNavLink href={cvPdf} download>
						<span className="fas fa-file-download"></span> CV
					</ButtonNavLink>
					<ButtonNav to="/contact">Contact</ButtonNav>
				</Flex>
			</Flex>
		</NavContainer>
	);
}
