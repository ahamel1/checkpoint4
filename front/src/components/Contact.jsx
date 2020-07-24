import React from "react";
import Navigation from "./Navigation";
import Form from "./Form";
import styled from "styled-components";

const LinkBack = styled.a`
  text-decoration: none;
  font-weight: bold;
  margin: 1rem 2rem;
  display: inline-block;
  color: #badac9;
  text-transform: uppercase;
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
