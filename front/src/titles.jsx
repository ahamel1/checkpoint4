import styled from "styled-components";
import { Link } from "react-router-dom";

export const TitleH1 = styled(Link)`
  font-size: 2.6rem;
  font-weight: bold;
  color: black;
  text-decoration: none;
  margin: 1.6rem 0;
  text-transform: uppercase;
  width: 100%;
  letter-spacing: 2px;

  ${(props) => props.theme.mediaMax.small`
    font-size: 1.4rem;
    text-align: center;
  `}
`;

export const TitleH2 = styled.h2`
  font-size: 2rem;
  margin: 4rem 0 2rem 0;
  text-transform: uppercase;
  width: 100%;
  text-align: center;
  letter-spacing: 2px;

  ${(props) => props.theme.mediaMax.small`
    font-size: 1rem;
    margin-top: ${(props) => (props.mobilemt ? "4rem" : "3rem")};
  `}
`;

export const TitleH3 = styled.h3`
  font-size: 1.5rem;
  padding: 1rem;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 2px;
  text-shadow: grey 10px 0 6px;
  color: white;

  ${(props) => props.theme.mediaMax.small`
    font-size: 1rem;
  `}
`;
