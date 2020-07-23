import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Flex, ContainerListItem, ListItem, TitleH1 } from "../mainStyle";

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: #badac9;
  @media (max-width: 768px) {
    padding: 1rem 0;
  }
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

const LinkItem = styled.a`
  color: black;
  &:hover {
    color: #678a77;
  }
`;

export default function Navigation() {
  return (
    <NavContainer>
      <ContainerListItem flexb30>
        <ListItem>
          <LinkItem
            href="https://www.linkedin.com/in/alice-hamel-867060159/"
            rel="linkedin"
            target="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </LinkItem>
        </ListItem>
        <ListItem>
          <LinkItem
            href="https://twitter.com/alicemcht"
            rel="twitter"
            target="noopener noreferrer"
          >
            <i className="fab fa-twitter-square"></i>
          </LinkItem>
        </ListItem>
        <ListItem>
          <LinkItem
            href="https://github.com/ahamel1"
            rel="github"
            target="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </LinkItem>
        </ListItem>
      </ContainerListItem>
      <Flex center flexb70 mobilefd>
        <Flex flexb50 center mobileml0>
          <TitleH1 to="/">Alice Hamel</TitleH1>
        </Flex>
        <Flex flexend acenter se mr3 mobilemr>
          <ButtonNav to="/about">About</ButtonNav>
          <ButtonNav to="/projets">Projets</ButtonNav>
          <ButtonNav to="/contact">Contact</ButtonNav>
        </Flex>
      </Flex>
    </NavContainer>
  );
}
