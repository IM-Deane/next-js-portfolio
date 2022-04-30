import {
	Section,
	SectionTitle,
	SectionText,
	SectionSubText,
} from "../../styles/GlobalComponents";
import {
	LeftSection,
	HeroButtonContainer,
	HeroButton,
	HeroButtonAlt,
} from "./HeroStyles";

const Hero = () => (
	<Section row nopadding>
		<LeftSection>
			<SectionTitle main center style={{ marginBottom: "0" }}>
				Tristan Deane
			</SectionTitle>
			<SectionSubText>
				Software Engineer 👨🏾‍💻 | DeFi Enthusiast 🔐 | PJ Warrior 🥋
			</SectionSubText>
			<div style={{ margin: "30px 0" }}>
				<SectionText>Hey friend, thanks for dropping by! 👋🏾</SectionText>
				<SectionText>
					Want to learn about the latest software and blockchain? Checkout the
					blog. 📖
				</SectionText>
				<SectionText>
					Otherwise, keep scrolling to learn a little more about me. 😁
				</SectionText>
			</div>
			<HeroButtonContainer>
				<HeroButton onClick={() => (window.location = "#")}>
					Read the blog
				</HeroButton>
				<HeroButtonAlt onClick={() => (window.location = "#projects")}>
					Discover projects
				</HeroButtonAlt>
			</HeroButtonContainer>
		</LeftSection>
	</Section>
);

export default Hero;
