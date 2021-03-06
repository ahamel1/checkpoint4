import React from "react";
import { ContainerListItem, ListItem } from "../mainStyle";
import styled from "styled-components";

const LinkItem = styled.a`
	color: ${(props) => props.theme.blue};
	&:hover {
		color: ${(props) => props.theme.orange};
	}

	${(props) => props.theme.mediaMax.xSmall`
	color: ${(props) => props.theme.beige};
	`};
`;

export default function SocialMedia() {
	return (
		<ContainerListItem>
			<ListItem>
				<LinkItem
					href="https://www.linkedin.com/in/alice-hamel-867060159/"
					rel="linkedin"
					target="noopener noreferrer"
				>
					<i className="fa fa-linkedin fa-lg"></i>
				</LinkItem>
			</ListItem>
			<ListItem>
				<LinkItem
					href="https://twitter.com/alicemcht"
					rel="twitter"
					target="noopener noreferrer"
				>
					<i className="fa fa-twitter fa-lg"></i>
				</LinkItem>
			</ListItem>
			<ListItem>
				<LinkItem
					href="https://github.com/ahamel1"
					rel="github"
					target="noopener noreferrer"
				>
					<i className="fab fa-github fa-lg"></i>
				</LinkItem>
			</ListItem>
		</ContainerListItem>
	);
}
