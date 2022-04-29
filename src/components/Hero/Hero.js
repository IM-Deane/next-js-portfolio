import {
	Section,
	SectionText,
	SectionTitle,
	SectionSubText,
	Avatar,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

import TristanAvatar from "../../../public/images/tristan-avatar.jpg";

const Hero = () => (
	<Section row nopadding>
		<LeftSection>
			{/* <header style={{ display: "flex", alignItems: "center" }}>
				<div style={{ flex: "1 1 25%", marginTop: "10px" }}>
					<Avatar src={TristanAvatar} width="100%" height="100%" />
				</div>
				<SectionTitle
					main
					center
					style={{ flex: "1 0 75%", fontSize: "2.8em", marginBottom: "10px" }}
				>
					Tristan Deane
				</SectionTitle>
			</header> */}
			<SectionTitle
				main
				center
				// style={{ flex: "1 0 75%", fontSize: "2.8em", marginBottom: "10px" }}
			>
				Tristan Deane
			</SectionTitle>
			{/* subtitle */}
			<SectionSubText>
				Software Engineer 👨🏾‍💻 | DeFi Enthusiast 🔐 | Pyjama Warrior 🥋
			</SectionSubText>
			{/* body */}
			<div style={{ margin: "10px 0" }}>
				<SectionText>
					I'm a growth-orientend engineer with several years of full-stack
					development experience.
				</SectionText>
			</div>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
				}}
			>
				<Button margin="0" onClick={() => (window.location = "#")}>
					Read the blog
				</Button>
				<Button alt="true" onClick={() => (window.location = "#projects")}>
					Discover projects
				</Button>
			</div>
		</LeftSection>
	</Section>
);

export default Hero;
