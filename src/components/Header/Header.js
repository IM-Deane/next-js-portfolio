import React from "react";
import Link from "next/link";

import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

import {
	Container,
	BrandContainer,
	SiteLogo,
	Div1,
	Div2,
	Div3,
	NavLink,
	SocialIcons,
	BrandText,
} from "./HeaderStyles";

const Header = () => {
	return (
		<Container>
			<Div1>
				<Link href="/" passHref>
					<BrandContainer aria-label="Logo link for portfolio page">
						<SiteLogo /> <BrandText>Tristan Deane</BrandText>
					</BrandContainer>
				</Link>
			</Div1>
			<Div2>
				<Link href="#projects" passHref aria-label="Jump to projects section">
					<NavLink>Projects</NavLink>
				</Link>

				<Link href="#tech" passHref aria-label="Jump to technologies section">
					<NavLink>Technologies</NavLink>
				</Link>

				<Link href="#about" passHref aria-label="Jump to profile section">
					<NavLink>About</NavLink>
				</Link>
			</Div2>
			<Div3>
				<SocialIcons
					href="https://github.com/IM-Deane"
					aria-label="GitHub account for Tristan Deane"
				>
					<AiFillGithub size="3rem" />
				</SocialIcons>
				<SocialIcons
					href="https://www.linkedin.com/in/tristan-deane-software-developer/"
					aria-label="Linkedin profile of Tristan Deane"
				>
					<AiFillLinkedin size="3rem" />
				</SocialIcons>
				<SocialIcons
					href="https://www.instagram.com/trizzeydeane6/"
					aria-label="Instagram profile for Tristan Deane"
				>
					<AiFillInstagram size="3rem" />
				</SocialIcons>
			</Div3>
		</Container>
	);
};

export default Header;
