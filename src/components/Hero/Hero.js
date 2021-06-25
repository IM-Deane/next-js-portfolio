import React from "react";

import {
	Section,
	SectionText,
	SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
	<Section row nopadding>
		<LeftSection>
			<SectionTitle main center>
				Hello World! <br /> Welcome to my web development portfolio.
			</SectionTitle>
			<SectionText>
				The goal of this site is to exhibit my various creations. I am currently
				playing with the MERN stack, so my latest projects will reflect this
				exciting niche.
			</SectionText>
			{/* CTA */}
			<Button onClick={() => (window.location = "#projects")}>
				Discover Projects
			</Button>
		</LeftSection>
	</Section>
);

export default Hero;
