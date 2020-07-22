import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  flex-basis: 33%;
  justify-content: ${(props) => props.flexend && "flex-end"};
  justify-content: ${(props) => props.center && "center"};
  margin-right: ${(props) => props.mr3 && "3rem"};
  @media (max-width: 768px) {
    margin-right: ${(props) => props.mobilemr && "1rem"};
    flex-basis: ${(props) => props.mobilefb && "60%"};
  }
`;

export const ListItem = styled.li`
  list-style: none;
  padding-left: 2rem;
  @media (max-width: 768px) {
    padding: 0;
  }
`;

export const ContainerListItem = styled.ul`
  display: flex;
  flex-basis: ${(props) => props.flexb33 && "33%"};
  margin-left: 2rem;
  @media (max-width: 768px) {
    margin-left: 1rem;
    justify-content: space-evenly;
    align-items: flex-start;
  }
`;

export const TitleH1 = styled.h1`
  font-size: 2rem;
  margin: 1rem 0;
  text-transform: uppercase;
  width: 100%;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;
