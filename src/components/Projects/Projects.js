import React from "react";
import Link from "next/link";

import {
	GalleryLink,
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
} from "./ProjectsStyles";
import {
	Section,
	SectionDivider,
	SectionTitle,
	SectionText,
} from "../../styles/GlobalComponents";
// Projects data
import { projectData } from "../../constants/constants";

const Projects = () => {
	// Get featured projects
	const featuredProjects = projectData.filter((project) => project.isFeatured);

	return (
		<Section nopadding id="projects">
			<SectionDivider />
			<SectionTitle main>Project Spotlight</SectionTitle>
			<SectionText>
				This section contains some of my favorite projects. Each of them has
				been chosen to highlight a particular area of my skillset. <br />
				<br /> I am particularly proud of{" "}
				<strong style={{ fontWeight: "bold" }}>Historical Figures</strong>,
				which is a Full-stack React application.
			</SectionText>
			<SectionText>
				You can discover more of my work by viewing my{" "}
				<Link
					passHref
					href="/projects"
					aria-label="Navigate to project gallery page"
				>
					<GalleryLink>project gallery</GalleryLink>
				</Link>
				.
			</SectionText>
			<GridContainer>
				{featuredProjects.map(
					({ id, image, title, description, tags, source, visit }) => (
						<BlogCard key={id}>
							<Img src={image} alt={title} />
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
									<ExternalLinks
										href={source}
										aria-label="View this project's GitHub repository."
									>
										Source
									</ExternalLinks>
									<ExternalLinks
										href={visit}
										aria-label="Visit the live demo site for this project."
									>
										View
									</ExternalLinks>
								</UtilityList>
							</div>
						</BlogCard>
					)
				)}
			</GridContainer>
		</Section>
	);
};

export default Projects;
