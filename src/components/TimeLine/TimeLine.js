import React, { useState, useRef, useEffect } from "react";

import Image from "next/image";
import {
	ProfileCard,
	ReadMoreContainer,
	ReadMoreBg,
	Link,
	ReadMoreLink,
	CarouselButton,
	CarouselButtonDot,
	CarouselButtons,
	CarouselContainer,
	CarouselItem,
	CarouselItemImg,
	CarouselItemText,
	CarouselItemTitle,
	CarouselMobileScrollNode,
} from "./TimeLineStyles";
import {
	Section,
	SectionText,
	SectionTitle,
} from "../../styles/GlobalComponents";
import { TimeLineData } from "../../constants/constants";

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
	const [activeItem, setActiveItem] = useState(0);
	const carouselRef = useRef();

	const [readMore, setReadMore] = useState(false);

	const scroll = (node, left) => {
		return node.scrollTo({ left, behavior: "smooth" });
	};

	// Handler for carousel
	const handleClick = (e, i) => {
		e.preventDefault();

		// Check if carousel exists
		if (carouselRef.current) {
			// Scroll depends on width of element
			const scrollLeft = Math.floor(
				carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length)
			);

			scroll(carouselRef.current, scrollLeft);
		}
	};

	const toggleReadMore = () => {
		setReadMore(!readMore);
	};

	// Set active item based on how far the user has scrolled
	const handleScroll = () => {
		if (carouselRef.current) {
			const index = Math.round(
				(carouselRef.current.scrollLeft /
					(carouselRef.current.scrollWidth * 0.7)) *
					TimeLineData.length
			);

			setActiveItem(index);
		}
	};

	// Extra content rendered when user clicks read more link
	const readMoreContent = (
		<>
			<SectionText>
				Over the past few months, I have been working with a construction
				company called TCA Developments. A majority of my time has been spent on
				the design and creation of their{" "}
				<Link href="https://tcadevelopments.com" target="_blank">
					website.
				</Link>
			</SectionText>
			<SectionText>
				After a successful launch, I went on to create a dashboard web app to
				visualize their administrative data.
			</SectionText>
			<SectionText>
				Academically, I am going into my 2nd year of NAIT's Computer Software
				Development program. However, I am also happy to announce that I have
				been accepted into the Fall 2021 intake of their CO-OP program.
			</SectionText>
			{/* <SectionText>
				Currently, I am in the process of implementing a scheduling app that
				enables managers to assign employees to job sites (think Jobber) and
				manage their tasks in real-time.
			</SectionText> */}
		</>
	);

	// // Snap back to beginning of scroll when window is resized
	// // avoids a bug where content is covered up if coming from smaller screen
	useEffect(() => {
		const handleResize = () => {
			scroll(carouselRef.current, 0);
		};

		window.addEventListener("resize", handleResize);
	}, []);

	return (
		<Section id="about">
			<SectionTitle>About me</SectionTitle>
			{/* Lead */}
			<ProfileCard>
				<Image
					width={400}
					height={500}
					src={"/images/portfolio-main-400w.jpg"}
					alt="Profile photo of Tristan Deane"
				/>
			</ProfileCard>
			<SectionText style={{ marginTop: "20px" }}>
				Hey there, my name is Tristan and I'm a web developer from Edmonton,
				Alberta.
				<span style={{ margin: "0 8px" }}>
					<Image width={20} height={20} src={"/images/canadian-flag.svg"} />
				</span>{" "}
				I'm 28 years old and have just begun my journey in this exciting
				industry.
			</SectionText>
			{/* Skill overview */}
			<SectionText>
				I started coding about two years ago after learning the basics from a
				computer science course at the University of Athabasca. Although I enjoy
				using languages such as Python and Java, my current focus has been on
				the JavaScript ecosystem including: React, Next, Node, and Express.
			</SectionText>
			{/* Extra content */}
			<ReadMoreContainer>
				<ReadMoreLink onClick={toggleReadMore}>
					{readMore ? "- Read less" : ` + Read more`}
				</ReadMoreLink>

				<div>{readMore && readMoreContent}</div>
			</ReadMoreContainer>

			{/* Timeline carousel */}
			<CarouselContainer ref={carouselRef} onScroll={handleScroll}>
				<>
					{TimeLineData.map((item, index) => (
						// Always have a carousel item
						<CarouselMobileScrollNode
							key={index}
							final={index === TOTAL_CAROUSEL_COUNT - 1}
						>
							<CarouselItem
								index={index}
								id={`Carousel-item-${index}`}
								active={activeItem}
								onClick={(e) => handleClick(e, index)}
							>
								<CarouselItemTitle>
									{/* Timeline year */}
									{item.year}
									<CarouselItemImg
										width="208"
										height="6"
										viewBox="0 0 208 6"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z"
											fill="url(#paint0_linear)"
											fillOpacity="0.33"
										/>
										<defs>
											<linearGradient
												id="paint0_linear"
												x1="-4.30412e-10"
												y1="0.5"
												x2="208"
												y2="0.500295"
												gradientUnits="userSpaceOnUse"
											>
												<stop stopColor="white" />
												<stop
													offset="0.79478"
													stopColor="white"
													stopOpacity="0"
												/>
											</linearGradient>
										</defs>
									</CarouselItemImg>
								</CarouselItemTitle>
								<CarouselItemText>{item.text}</CarouselItemText>
							</CarouselItem>
						</CarouselMobileScrollNode>
					))}
				</>
			</CarouselContainer>
			<CarouselButtons>
				{TimeLineData.map((item, index) => (
					<CarouselButton
						key={index}
						index={index}
						active={activeItem}
						onClick={(e) => handleClick(e, index)}
						type="button"
					>
						<CarouselButtonDot active={activeItem} />
					</CarouselButton>
				))}
			</CarouselButtons>
		</Section>
	);
};

export default Timeline;
