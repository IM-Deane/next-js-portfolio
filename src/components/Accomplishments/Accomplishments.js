import React from "react";

import {
	Section,
	SectionDivider,
	SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AccomplishmentsStyles";

import { accomplishments } from "../../constants/constants";

const Accomplishments = () => (
	<Section>
		<SectionDivider style={{ marginBottom: "22px" }} />
		<SectionTitle>Personal Accomplishments</SectionTitle>
		<Boxes>
			{accomplishments.map((card, index) => (
				<Box key={index}>
					<BoxNum>{card.number}+</BoxNum>
					<BoxText>{card.text}</BoxText>
				</Box>
			))}
		</Boxes>
	</Section>
);

export default Accomplishments;
