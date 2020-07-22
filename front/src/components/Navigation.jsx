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
`;

export default function Navigation() {
  return (
    <NavContainer>
      <ContainerListItem flexb33>
        <ListItem>
          <a
            href="https://www.linkedin.com/in/alice-hamel-867060159/"
            rel="linkedin"
            target="noopener noreferrer"
            style={{ color: "black" }}
          >
            <i class="fab fa-linkedin"></i>
          </a>
        </ListItem>
        <ListItem>
          <a
            href="https://twitter.com/alicemcht"
            style={{ color: "black" }}
            rel="twitter"
            target="noopener noreferrer"
          >
            <i class="fab fa-twitter-square"></i>
          </a>
        </ListItem>
        <ListItem>
          <a
            href="https://github.com/ahamel1"
            style={{ color: "black" }}
            rel="github"
            target="noopener noreferrer"
          >
            <i class="fab fa-github"></i>
          </a>
        </ListItem>
      </ContainerListItem>
      <Flex center mobilefb>
        <TitleH1>Alice Hamel</TitleH1>
      </Flex>
      <Flex flexend mr3 mobilemr>
        <ButtonNav to="/contact">Contact</ButtonNav>
      </Flex>
    </NavContainer>
  );
}
