import React from "react";
import Navigation from "./Navigation";
import Form from "./Form";
import styled from "styled-components";

const LinkBack = styled.a`
  display: inline-block;
  text-transform: uppercase;
  text-decoration: none;
  color: black;
  padding: 1rem;
  &:hover {
    color: #678a77;
  }
`;

export default function Contact() {
  return (
    <>
      <Navigation />
      <LinkBack href="/">retour</LinkBack>
      <Form />
    </>
  );
}
