import React from "react";

// Icons
import {
	AiFillGithub,
	AiFillInstagram,
	AiFillLinkedin,
	AiOutlineMail,
} from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";

// Styles
import {
	CompanyContainer,
	FooterWrapper,
	LinkColumn,
	LinkItem,
	LinkList,
	LinkTitle,
	Slogan,
	SloganIcon,
	SocialContainer,
	SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
	return (
		<FooterWrapper>
			<LinkList>
				{/* <LinkColumn>
					<LinkTitle style={{ display: "flex", alignItems: "center" }}>
						<AiOutlineMail size="2rem" style={{ marginRight: "8px" }} />
						Email
					</LinkTitle>
					<LinkItem
						href="mailto:tristandeane93@gmail.com"
						aria-label="Email address for Tristan Deane"
					>
						tristandeane93@gmail.com
					</LinkItem>
				</LinkColumn> */}
			</LinkList>
			<SocialContainer>
				<CompanyContainer>
					<Slogan>
						<SloganIcon />
						tristandeane.ca
					</Slogan>
				</CompanyContainer>
				<SocialIconsContainer>
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
				</SocialIconsContainer>
			</SocialContainer>
		</FooterWrapper>
	);
};

export default Footer;
