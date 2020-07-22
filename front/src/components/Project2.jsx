import React from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { TitleH3 } from "../mainStyle";

const AnimeCard = styled(animated.div)`
  width: 100%;
  height: 60vh;
  border-radius: 5px;
  background-image: url(https://www.soomeet.com/wp-content/uploads/location-salle-evenement-fete-soiree-cocktail-003.jpg);
  background-size: cover;
  background-position: center center;
  box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.5s;
  will-change: transform;
  border: 15px solid white;

  &:hover {
    box-shadow: 0px 30px 100px -10px rgba(0, 0, 0, 0.4);
  }

  @media (max-width: 768px) {
    width: 80%;
    margin: 3rem auto;
  }
`;

const LinkContainer = styled(Link)`
  width: 25%;
  text-decoration: none;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 200,
  -(x - window.innerWidth / 10) / 400,
  1.04,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

export default function Project({ linkTo }) {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));
  return (
    <LinkContainer to={linkTo}>
      <AnimeCard
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{ transform: props.xys.interpolate(trans) }}
      >
        <TitleH3>Arsenic Cocktail</TitleH3>
      </AnimeCard>
    </LinkContainer>
  );
}
