import React from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { TitleH3 } from "../titles";

const AnimeCard = styled(animated.div)`
  width: 100%;
  height: 60vh;
  border-radius: 5px;
  background-image: url("https://www.thebalancecareers.com/thmb/ZAlrGqlRcCrW6kLyrWYr_z7bGP8=/2121x1193/smart/filters:no_upscale()/GettyImages-513438257-0865015e17944a0f88c1ec923686525e.jpg");
  background-size: cover;
  background-position: center center;
  box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.5s;
  will-change: transform;
  border: 15px solid white;

  &:hover {
    box-shadow: 0px 30px 100px -10px rgba(0, 0, 0, 0.4);
  }

  ${(props) => props.theme.mediaMax.small`
    width: 80%;
    margin: 2rem auto;
  `}
`;

const LinkContainer = styled(Link)`
  width: 25%;
  text-decoration: none;
  ${(props) => props.theme.mediaMax.small`
    width: 100%;
  `}
`;

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 200,
  -(x - window.innerWidth / 1) / 200,
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
        <TitleH3>Forope</TitleH3>
      </AnimeCard>
    </LinkContainer>
  );
}
