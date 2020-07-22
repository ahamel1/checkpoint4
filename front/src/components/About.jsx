import React from "react";
import { Flex } from "../mainStyle";
import styled from "styled-components";

const PartOne = styled.img`
  flex-basis: 40%;
  margin-right: 3rem;
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
  }
`;

export default function About() {
  return (
    <Flex mobilefd mobilehgt W90 mt2>
      <PartOne src="https://via.placeholder.com/600" alt="alice" />
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
