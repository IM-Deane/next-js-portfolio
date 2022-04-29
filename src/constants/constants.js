// Data for project cards
export const projectData = [
	{
		title: "Crwn Clothing",
		description:
			"This full-stack e-commerce application was built during a 40-hour React course I recently completed. Throughout the program we learned numerous fundemental and advanced React concepts.",
		image: "/images/projects/crwn-clothing-thumbnail-630w.jpg",
		tags: ["React", "SASS", "Redux", "Firebase"],
		source: "https://github.com/IM-Deane/crwn-clothing",
		visit: "https://crwn-clothing-im-deane.herokuapp.com/",
		id: 0,
		isFeatured: true,
	},
	{
		title: "NASA Mission Control",
		description:
			"This project allows users to manage interstellar launches to habitable planets. Project was created to practice building backend API's with Node.",
		image: "/images/projects/nasa-mission-control-630w.jpg",
		tags: ["React", "Node", "AWS EC2", "Mongo"],
		source: "https://github.com/IM-Deane/nasa-project",
		visit: "http://34.222.179.139:8000/",
		id: 1,
		isFeatured: true,
	},
	{
		title: "Historical Figures",
		description:
			"This app utilizes the MERN stack to create a small-scale historical figures website. Users can create a new profile or login using their Google accounts. Once logged in, the user can create posts and like posts created by others.",
		image: "/images/projects/historical-figures-thumbnail-630w.jpg",
		tags: ["Mongo", "Express", "React", "Node"],
		source: "https://github.com/IM-Deane/historical-figures",
		visit: "https://im-deane-historical-figures.netlify.app/posts",
		id: 2,
		isFeatured: true,
	},

	{
		title: "TCA Developments",
		description:
			"TCA Developments is a general contracting company that specializes in commerical construction and rennovation. I was commissioned to redesign their company website.",
		image: "/images/projects/tca-developments-thumbnail.jpg",
		tags: ["React", "Bootstrap 5", "SASS"],
		source: "https://github.com/IM-Deane/tca-developments-website",
		visit: "https://www.tcadevelopments.com/",
		id: 3,
		isFeatured: true,
	},

	{
		title: "Unichat",
		description:
			"Unichat was created to learn more about React and solidify my ability to work with API's. It is a Real-Time web based chat application that utilizes Firebase & Chat Engine.",
		image: "/images/projects/unichat-thumbnail.jpg",
		tags: ["React", "ChatEngine", "Firebase"],
		source: "https://github.com/IM-Deane/unichat-project",
		visit: "https://unichat-project-im-deane.netlify.app/",
		id: 4,
		isFeatured: false,
	},
	{
		title: "Humble Pie",
		description:
			"Humble pie was a final project created during my studies at NAIT. Our task was to create a multi-page website using HTML5 & CSS3. To add more functionality, I implemented an express server to handle form submissions.",
		image: "/images/projects/humble-pie-thumbnail.jpg",
		tags: ["HTML5", "CSS3", "Express"],
		source: "https://github.com/IM-Deane/humble-pie",
		visit: "https://humble-pie.herokuapp.com/",
		id: 5,
		isFeatured: false,
	},
	{
		title: "Game Library Manager",
		description:
			"This project began as a simple backend Express.js application. My goal was to practice building a RESTful API. However, after completing the initial backend, I decided to take additional steps to enhance the app. This new version features a client side interface that allows users to manage a small game library.",
		image: "/images/projects/game-manager-thumbnail.jpg",
		tags: ["React", "Express", "Material-UI", "Mongo"],
		source: "https://github.com/IM-Deane/game-manager",
		visit: "https://mern-game-library-manager.netlify.app/",
		id: 6,
		isFeatured: false,
	},
];

// Data for About section timeline
export const TimeLineData = [
	{
		year: 2017,
		text: "Enrolled in the University of Athabasca's Computer Science program",
	},
	{
		year: 2020,
		text: "Began working for TCA Developments as a Full-stack Developer",
	},
	{
		year: 2020,
		text: "Near the end of the year, I began freelancing as a way to cultivate my skills and explore various niches.",
	},
	{
		year: 2021,
		text: "Began working at Nimble as a full-time Software Engineer.",
	},
	{
		year: 2022,
		text: "Currently devouring all materials involving blockchain technology and DeFi.",
	},
	// { year: 2021, text: "Created an online Job board with a colleague" },
];

// Data for accomplishments section
export const accomplishments = [
	{ number: 3, text: "Full-Stack Projects" },
	{ number: 2, text: "Freelance projects" },
	{ number: 3.5, text: "GPA" },
	{ number: 2021, text: "Accepted into NAIT's CSD CO-OP Program" },
	// { number: 100, text: "Increase in clients revenue due to website" },
];
