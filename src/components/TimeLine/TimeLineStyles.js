import styled from "styled-components";
import Image from "next/image";

export const ProfileCard = styled.div`
	border-radius: 10px;
	box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
	text-align: center;
	width: 400px;
	@media ${(props) => props.theme.breakpoints.sm} {
		width: 100%;
	}
`;

export const Img = styled(Image)`
	@media screen and (max-width: 700px) {
		width: 100%;
		height: 500px;
	}

	// Small devices
	@media screen and (max-width: 500px) {
		width: 100%;
		height: auto;
	}
`;

export const ReadMoreContainer = styled.article`
	margin-bottom: 40px;
`;

export const ReadMoreBg = styled.div`
	width: 100%;
	height: 100%;

	background: linear-gradient(
		-45deg,
		#b86046,
		rgb(82, 52, 52),
		#181d1f,
		#a3a3a3
	);
	background-size: 400% 400%;
	animation: gradient 15s ease infinite;

	@keyframes gradient {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}
`;

// Toggles extra content depending on click
export const ReadMoreLink = styled.a`
	color: white;
	font-size: 2rem;

	cursor: pointer;
	&:hover {
		font-size: 2.1rem;
		transition: 0.3s;
	}

	background: linear-gradient(-45deg, #2c304d, #006bb8, #181d1f, #a3a3a3);
	background-size: 400% 400%;
	animation: gradient 10s ease infinite;

	@keyframes gradient {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}
`;

export const Link = styled.a`
	text-decoration: underline;
	color: #ab88fb;

	&:hover {
		color: #ffffff;
		transition: 0.5s;
		cursor: pointer;
	}
`;

export const CarouselContainer = styled.div`
	max-width: 1040px;
	background: #0f1624;
	padding: 0rem;
	list-style: none;
	display: flex;
	justify-content: space-between;
	/* overflow-x: hidden; */

	margin-left: 32px;
	&:first-of-type {
		margin-left: 0px;
	}

	margin-bottom: 80px;

	//remove scrollbar
	scrollbar-width: none;
	&::-webkit-scrollbar {
		display: none;
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		overflow-x: scroll;
		-webkit-overflow-scrolling: touch;
		scroll-snap-type: x mandatory;
		touch-action: pan-x;
		justify-content: initial;
		margin-bottom: 8px;
	}
`;
export const CarouselMobileScrollNode = styled.ul`
	@media ${(props) => props.theme.breakpoints.sm} {
		display: flex;
		min-width: ${({ final }) => (final ? `120%;` : `min-content`)};
	}
`;

export const CarouselItem = styled.li`
	background: #0f1624;
	border-radius: 3px;
	max-width: 196px;

	@media ${(props) => props.theme.breakpoints.md} {
		max-width: 124px;
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		margin-left: 32px;
		min-width: 120px;
		background: #0e131f;
		padding: 4px;
		align-content: start;
		scroll-snap-align: start;
		border-radius: 3px;
		overflow: visible;
		position: relative;
		height: fit-content;

		${(props) =>
			props.active === props.index ? `opacity: 1` : `opacity: 0.5`};
	}
`;

export const CarouselItemTitle = styled.h4`
	font-weight: bold;
	font-size: 24px;
	line-height: 32px;
	letter-spacing: 0.02em;
	display: flex;
	/* This gradient is different due to the size of the Title container, it must transition sooner to be visible on the text */
	background: linear-gradient(
		121.57deg,
		#ffffff 10%,
		rgba(255, 255, 255, 0.66) 30.15%
	);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	margin-bottom: 8px;

	@media ${(props) => props.theme.breakpoints.md} {
		font-size: 20px;
		line-height: 28px;
		margin-bottom: 4px;
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 16px;
		line-height: 24px;
	}
`;
export const CarouselItemImg = styled.svg`
	margin-left: 21px;
	-webkit-mask-image: linear-gradient(
		to right,
		rgba(0, 0, 0, 1),
		rgba(0, 0, 0, 0)
	);
	width: 100%;

	@media ${(props) => props.theme.breakpoints.sm} {
		-webkit-mask-image: none;
		margin-left: 16px;
		overflow: visible;
	}
`;

export const CarouselItemText = styled.p`
	font-size: 14px;
	line-height: 22px;
	letter-spacing: 0.02em;
	color: rgba(255, 255, 255, 0.75);
	padding-right: 16px;

	@media ${(props) => props.theme.breakpoints.md} {
		font-size: 12px;
		line-height: 18px;
		padding-right: 32px;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 10px;
		line-height: 16px;
		padding-right: 0;
	}
`;
export const CarouselButtons = styled.div`
	width: 288px;

	display: none;
	visibility: hidden;

	@media ${(props) => props.theme.breakpoints.sm} {
		display: flex;
		visibility: visible;
		margin-bottom: 48px;
	}
`;

export const CarouselButton = styled.button`
	box-sizing: border-box;
	background: none;
	padding: 4px;
	border: none;
	cursor: pointer;
	margin-right: 4px;
	opacity: ${(props) => (props.active === props.index ? `1` : `.33`)};
	transform: ${(props) =>
		props.active === props.index ? `scale(1.6)` : `scale(1)`};

	&:focus {
		outline: none;
	}
`;

export const CarouselButtonDot = styled.div`
	background-color: white;
	border-radius: 10px;
	margin: auto;
	width: 3px;
	height: 3px;
`;
