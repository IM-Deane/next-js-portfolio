import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import { FaEthereum } from "react-icons/fa";
import {
	Section,
	SectionDivider,
	SectionText,
	SectionTitle,
} from "../../styles/GlobalComponents";
import {
	List,
	ListContainer,
	ListItem,
	ListParagraph,
	ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
	<Section id="tech">
		<SectionDivider />
		<br />
		<SectionTitle>Technologies</SectionTitle>
		<SectionText>
			I’ve explored a lot of different technologies throughout my studies. Some
			of my strongest are listed below.
		</SectionText>
		<List>
			<ListItem>
				<DiReact size="3rem" />
				<ListContainer>
					<ListTitle>General</ListTitle>
					<ListParagraph>JavaScript | React | Next.js | Node.js</ListParagraph>
					<ListParagraph>TypeScript | Python | Django | Golang</ListParagraph>
					<ListParagraph>Rust</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem>
				<DiFirebase size="3rem" />
				<ListContainer>
					<ListTitle>Backend/Dev-Ops</ListTitle>
					<ListParagraph>Docker | AWS | GitHub Actions</ListParagraph>
					<ListParagraph>CircleCI | Heroku | MongoDB</ListParagraph>
					<ListParagraph>PostgreSQL</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem>
				<DiZend size="3rem" />
				<ListContainer>
					<ListTitle>UI/UX</ListTitle>
					<ListParagraph>Tailwindcss | Material-UI | Bootstrap</ListParagraph>
					<ListParagraph>Styled-Components | SASS | CSS</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem>
				<FaEthereum size="2rem" />
				<ListContainer>
					<ListTitle>Blockchain</ListTitle>
					<ListParagraph>Solidity | Web3.js | Truffle Wallet</ListParagraph>
					<ListParagraph>Hardhat | Infura.io | Remix.io</ListParagraph>
				</ListContainer>
			</ListItem>
		</List>
	</Section>
);

export default Technologies;
