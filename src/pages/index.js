import Accomplishments from "../components/Accomplishments/Accomplishments";
import BgAnimation from "../components/BackgroundAnimation/BackgroundAnimation";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import Timeline from "../components/TimeLine/TimeLine";
import Contact from "../components/Contact/Contact";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";
// For meta data
import Head from "next/head";

const Home = () => {
	return (
		<Layout>
			<Head>
				{/* Favicon set */}
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/favicon_wreath/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon_wreath/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon_wreath/favicon-16x16.png"
				/>
				<link rel="manifest" href="/favicon_wreath/site.webmanifest" />
				<link
					rel="mask-icon"
					href="/favicon_wreath/safari-pinned-tab.svg"
					color="#2b5797"
				/>
				<meta name="msapplication-TileColor" content="#2b5797" />
				<meta
					name="description"
					content="My name is Tristan Deane and i'm a software developer from Canada. This portfolio site was created to exhibt my various projects."
				/>
				<meta name="theme-color" content="#ffffff" />
				<title>Portfolio | Tristan Deane</title>
			</Head>
			<Section grid>
				<Hero />
				<BgAnimation />
			</Section>
			<Timeline />
			<Technologies />
			<Projects />
			<Contact />
			{/* TODO: hide this section until there's more to say */}
			{/* <Accomplishments /> */}
		</Layout>
	);
};

export default Home;
