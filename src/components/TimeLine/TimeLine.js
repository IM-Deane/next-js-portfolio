import React, { useState, useRef, useEffect } from "react";

import {
	ProfileCard,
	Img,
	ReadMoreContainer,
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
	SectionSubText,
} from "../../styles/GlobalComponents";
import { TimeLineData } from "../../constants/constants";

import ProfileImg from "../../../public/images/portfolio-main-400w.jpg";
import MaceImg from "../../../public/images/mace.jpg";

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
		<div style={{ marginTop: "25px" }}>
			<Img
				src={MaceImg}
				alt="My good kitty Mace"
				width="400px"
				height="400px"
			/>
			<SectionSubText>A real good kitteh! 😸</SectionSubText>
		</div>
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
				<Img
					src={ProfileImg}
					alt="Profile photo of Tristan Deane"
					width="400px"
					height="533px"
				/>
			</ProfileCard>
			<SectionText style={{ marginTop: "20px" }}>
				I'm a growth-orientend engineer with several years of full-stack
				development experience.
			</SectionText>
			<SectionText>
				I love to learn and spend the majority of my time building personal
				projects and writing about tech.
			</SectionText>
			<SectionText>
				When I do decide to blow off steam, my methods of choice include
				reading, lifting heavy things, and playing with my chubby cat Mace.
			</SectionText>
			{/* Extra content */}
			<ReadMoreContainer>
				<ReadMoreLink onClick={toggleReadMore}>
					{readMore ? "- Uggh hideous!" : ` + View a good kitty...`}
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
						aria-label={item.text}
					>
						<CarouselButtonDot active={activeItem} />
					</CarouselButton>
				))}
			</CarouselButtons>
		</Section>
	);
};

export default Timeline;
