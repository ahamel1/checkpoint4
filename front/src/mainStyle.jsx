import styled from "styled-components";

export const Flex = styled.div`
	display: flex;
	flex-basis: ${(props) => props.flexb50 && "50%"};
	flex-basis: ${(props) => props.flexb70 && "60%"};
	width: ${(props) => props.W90 && "90%"};
	align-items: ${(props) => props.acenter && "center"};
	justify-content: ${(props) => props.flexend && "flex-end"};
	justify-content: ${(props) => props.center && "center"};
	justify-content: ${(props) => props.sb && "space-between"};
	justify-content: ${(props) => props.se && "space-evenly"};
	margin-right: ${(props) => props.mr3 && "3rem"};
	margin-top: ${(props) => props.mt2 && "2rem"};
	margin-left: auto;
	margin-left: ${(props) => props.ml0 && "inherit"};
	width: 100%;

	${(props) => props.theme.mediaMax.small`
    margin-right: ${(props) => props.mobilemr && "1rem"};
    flex-basis: ${(props) => props.mobilefb && "60%"};
    flex-direction: ${(props) => props.mobilefd && "column"};
    height: ${(props) => props.mobilehgt && "60%"};
    margin-left: ${(props) => props.mobileml0 && "0"};
    margin-right: ${(props) => props.mobilemr0 && "0"};
    justify-content: ${(props) => props.mobilecenter && "center"};
    align-items: ${(props) => props.mobileacenter && "center"};
  `};

	${(props) => props.theme.mediaMax.xLarge`
    display: ${(props) => props.mobilebm && "none"};
`};
`;

export const ListItem = styled.li`
	list-style: none;
	padding-left: 1rem;
	margin-bottom: 0.5rem;

	${(props) => props.theme.mediaMax.small`
    padding: 0;
	`}
`;

export const ContainerListItem = styled.ul`
	z-index: 1000;
	position: fixed;
	bottom: 5rem;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	font-size: 0.9rem;
	font-weight: 500;

	${(props) => props.theme.mediaMin.xxLarge`
	bottom: 9rem;
	`};

	${(props) => props.theme.mediaMax.xLarge`
	bottom: 5rem;
	`};
`;
