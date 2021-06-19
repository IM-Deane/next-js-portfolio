import React from "react";

// Icons
import {
	AiFillGithub,
	AiFillInstagram,
	AiFillLinkedin,
	AiOutlineMail,
} from "react-icons/ai";
import { GiArchiveResearch } from "react-icons/gi";
import { CgPhone } from "react-icons/cg";

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
	SocialContainer,
	SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
	return (
		<FooterWrapper>
			<LinkList>
				<LinkColumn>
					<LinkTitle style={{ display: "flex", alignItems: "center" }}>
						<CgPhone size="2rem" style={{ marginRight: "8px" }} />
						Call
					</LinkTitle>
					<LinkItem href="tel:780-965-2229">780-965-2229</LinkItem>
				</LinkColumn>
				<LinkColumn>
					<LinkTitle style={{ display: "flex", alignItems: "center" }}>
						<AiOutlineMail size="2rem" style={{ marginRight: "8px" }} />
						Email
					</LinkTitle>
					<LinkItem href="mailto:contact@tristandeaneportfolio.com">
						contact@tristandeaneportfolio.com
					</LinkItem>
				</LinkColumn>
			</LinkList>
			<SocialContainer>
				<CompanyContainer>
					<Slogan style={{ display: "flex" }}>
						<GiArchiveResearch size="3rem" style={{ marginRight: "10px" }} />
						Currently learning: MERN STACK
					</Slogan>
				</CompanyContainer>
				<SocialIconsContainer>
					<SocialIcons href="https://github.com/IM-Deane">
						<AiFillGithub size="3rem" />
					</SocialIcons>
					<SocialIcons href="https://www.linkedin.com/in/tristan-deane-278781102/">
						<AiFillLinkedin size="3rem" />
					</SocialIcons>
					<SocialIcons href="https://www.instagram.com/trizzeydeane6/">
						<AiFillInstagram size="3rem" />
					</SocialIcons>
				</SocialIconsContainer>
			</SocialContainer>
		</FooterWrapper>
	);
};

export default Footer;
