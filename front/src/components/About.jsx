import React from "react";
import { Flex } from "../mainStyle";
import styled from "styled-components";
import pp from "../images/alice.jpg";

const PartOne = styled.img`
  flex-basis: 40%;
  margin-right: 3rem;

  @media (max-width: 768px) {
    height: 70%;
    width: 100%;
  }
`;

const PartTwo = styled.p`
  display: flex;
  flex-basis: 40%;
  align-items: center;
  text-align: center;
  border: solid 1px #badac9;
  margin-right: 3rem;
  padding: 1rem;
  @media (max-width: 768px) {
    margin-top: 2rem;
    width: 80%;
  }
`;

const ContainerParts = styled.div`
  @media (max-width: 768px) {
    width: 90%;
  }
`;

export default function About() {
  return (
    <Flex center mobilefd mobilehgt W90 mt2>
      <ContainerParts>
        <PartOne src={pp} alt="alice" />
      </ContainerParts>
      <PartTwo>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quam
        maxime veritatis aliquid esse tenetur natus magnam perspiciatis dolore,
        inventore, sit aspernatur! Adipisci dignissimos minus esse laudantium
        veritatis incidunt assumenda. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Blanditiis perferendis repudiandae nam voluptates
        perspiciatis commodi est voluptas sapiente sit fugit! Ullam unde quos,
        modi velit ipsa provident deleniti? Nesciunt, rem.
      </PartTwo>
    </Flex>
  );
}
