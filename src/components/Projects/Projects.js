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
			<SectionDivider divider />
			<SectionTitle main>Project Spotlight</SectionTitle>
			<SectionText>
				Like I said earlier, I’m always building something 👨🏾‍🔧. Take a look at
				some of my favourite projects below.
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
				<div style={{ gridColumn: "1 / span 2", marginTop: "40px" }}>
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
				</div>
			</GridContainer>
		</Section>
	);
};

export default Projects;
