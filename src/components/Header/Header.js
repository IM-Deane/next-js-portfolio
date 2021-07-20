import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { GiLaurels } from "react-icons/gi";

import {
	Container,
	Div1,
	Div2,
	Div3,
	NavLink,
	SocialIcons,
	Span,
} from "./HeaderStyles";

const Header = () => (
	<Container>
		<Div1>
			<Link href="/" passHref>
				<a
					aria-label="Logo link for portfolio page "
					style={{
						display: "flex",
						alignItems: "center",
						color: "white",
						marginBottom: "20px",
					}}
				>
					<GiLaurels size="3rem" style={{ margin: "0 10px" }} />{" "}
					<Span>Tristan Deane</Span>
				</a>
			</Link>
		</Div1>
		<Div2>
			<li>
				<Link href="#projects" passHref aria-label="Jump to projects section">
					<NavLink>Projects</NavLink>
				</Link>
			</li>
			<li>
				<Link href="#tech" passHref aria-label="Jump to technologies section">
					<NavLink>Technologies</NavLink>
				</Link>
			</li>
			<li>
				<Link href="#about" passHref aria-label="Jump to profile section">
					<NavLink>About</NavLink>
				</Link>
			</li>
		</Div2>
		<Div3>
			<SocialIcons
				href="https://github.com/IM-Deane"
				aria-label="GitHub account for Tristan Deane"
			>
				<AiFillGithub size="3rem" />
			</SocialIcons>
			<SocialIcons
				href="https://www.linkedin.com/in/tristan-deane-278781102/"
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

export default Header;
