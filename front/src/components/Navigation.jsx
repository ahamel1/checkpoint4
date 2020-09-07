import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Flex } from "../mainStyle";
import { TitleH1 } from "../titles";
import BurgerMenu from "./BurgerMenu";
import cvPdf from "../data/CV ALTERNANCE WCS.pdf";

const NavContainer = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	background-color: ${(props) => props.theme.blue};

	${(props) => props.theme.mediaMax.small`
    padding: 1rem 0;
  `}
`;

const Logo = styled(Flex)`
	font-size: 3rem;
	align-items: center;
	margin-left: 2rem;
	font-weight: bold;
	color: ${(props) => props.theme.beige}; ;
`;

const ButtonNav = styled(Link)`
	border: none;
	background: none;
	font-size: 1rem;
	text-decoration: none;
	color: ${(props) => props.theme.beige};
	margin-right: 2rem;
	&:hover {
		color: ${(props) => props.theme.violet};
	}
`;
const ButtonNavLink = styled(ButtonNav)``;

export default function Navigation() {
	return (
		<NavContainer>
			<BurgerMenu />
			<Flex center mobilefd>
				<Logo mobilebm>&#60;/&#62;</Logo>
				<Flex center mobileml0 txtcenter>
					<TitleH1 to="/">Alice Hamel</TitleH1>
				</Flex>
				<Flex flexend acenter mr3 mobilebm>
					<ButtonNavLink href={cvPdf} download>
						<span className="fas fa-file-download"></span> CV
					</ButtonNavLink>
					<ButtonNav to="/contact">Contact</ButtonNav>
				</Flex>
			</Flex>
		</NavContainer>
	);
}
