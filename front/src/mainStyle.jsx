import styled from "styled-components";

export const Flex = styled.div`
	display: flex;
	flex-basis: ${(props) => props.flexb50 && "50%"};
	flex-basis: ${(props) => props.flexb70 && "60%"};
	flex-wrap: ${(props) => props.wrap && "wrap"};

	width: 100%;
	width: ${(props) => props.W90 && "90%"};

	align-items: ${(props) => props.acenter && "center"};
	align-items: ${(props) => props.aend && "flex-end"};

	justify-content: ${(props) => props.flexend && "flex-end"};
	justify-content: ${(props) => props.center && "center"};
	justify-content: ${(props) => props.sb && "space-between"};
	justify-content: ${(props) => props.se && "space-evenly"};

	margin-right: ${(props) => props.mr3 && "3rem"};
	margin-top: ${(props) => props.mt2 && "2rem"};
	margin-left: auto;
	margin-left: ${(props) => props.ml0 && "inherit"};

	${(props) => props.theme.mediaMax.small`
	flex-basis: ${(props) => props.mobilefb && "60%"};
	flex-direction: ${(props) => props.mobilefd && "column"};
	height: ${(props) => props.mobilehgt && "60%"};
	
    margin-left: ${(props) => props.mobileml0 && "0"};
    margin-right: ${(props) => props.mobilemr && "1rem"};
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

	${(props) => props.theme.mediaMax.xSmall`
	margin-bottom: 0;
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

	${(props) => props.theme.mediaMin.xxLarge`
	bottom: 9rem;
	`};

	${(props) => props.theme.mediaMax.xLarge`
	bottom: 5rem;
	`};

	${(props) => props.theme.mediaMax.xSmall`
	flex-direction : row;
	border-radius : 2rem;
	background : rgba(185, 218, 200, 0.43);
	width: 30%;
	padding: 0.7rem;
	top:0.2rem;
	bottom: inherit;
	right:1rem;
	`};
`;
