import React, { useEffect } from "react";
import Link from "next/link";

import {
	BlogCard,
	CardInfo,
	ExternalLinks,
	GridContainer,
	HeaderThree,
	Hr,
	Tag,
	TagList,
	TitleContent,
	UtilityList,
	Img,
} from "../components/Projects/ProjectsStyles";
import { Section, SectionTitle } from "../styles/GlobalComponents";

import styled from "styled-components";
// Projects data
import { projectData } from "../constants/constants";

// Page bg wrapper
import { Background, GoBackLink } from "../styles/projectPageStyles.js";

// Back Icon
import { FiArrowLeftCircle } from "react-icons/fi";

const projects = () => {
	useEffect(() => {
		document.title = "Project Gallery | Tristan Deane Portfolio";
	}, []);

	return (
		<Background>
			<Section nopadding>
				<SectionTitle main>Project Gallery</SectionTitle>
				{/* Filter buttons
					Note: Until I have 10+ project I will not be implementing any filters. 
				*/}
				<div style={{ marginBottom: "40px" }}>
					<Link href="/">
						<GoBackLink>
							<FiArrowLeftCircle
								style={{ fontSize: "1.8rem", marginRight: "7px" }}
							/>{" "}
							Go Back Home
						</GoBackLink>
					</Link>
				</div>

				<GridContainer>
					{projectData.map(
						({ id, image, title, description, tags, source, visit }) => (
							<BlogCard key={id}>
								<Img src={image} />
								<TitleContent>
									<HeaderThree title="true">{title}</HeaderThree>
									<Hr />
								</TitleContent>
								<CardInfo>{description}</CardInfo>
								<div>
									<TitleContent>Stack</TitleContent>
									<TagList>
										{tags.map((tag, index) => (
											<Tag key={index}>{tag}</Tag>
										))}
									</TagList>
									<UtilityList>
										<ExternalLinks href={source}>Source</ExternalLinks>
										<ExternalLinks href={visit}>View</ExternalLinks>
									</UtilityList>
								</div>
							</BlogCard>
						)
					)}
				</GridContainer>
			</Section>
		</Background>
	);
};

export default projects;
