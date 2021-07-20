import { StoreItem } from "utils";

import profile_anna_miller from "images/profiles/profile-anna-miller.jpg";
// import profile_hansjoerg_rogen from "images/profiles/profile-hansjoerg-rogen.jpg";
import profile_isabella_moore from "images/profiles/profile-isabella-moore.jpg";
import profile_jack_walker from "images/profiles/profile-jack-walker.jpg";
import profile_kent_clark from "images/profiles/profile-kent-clark.jpg";
import profile_manuel_wilson from "images/profiles/profile-manuel-wilson.jpg";
import profile_max_smith from "images/profiles/profile-max-smith.jpg";
import profile_mia_johnson from "images/profiles/profile-mia-johnson.jpg";
import profile_olivia_lopez from "images/profiles/profile-olivia-lopez.jpg";
import profile_philipp_schwab from "images/profiles/profile-philipp-schwab.jpg";
import profile_sophia_williams from "images/profiles/profile-sophia-williams.jpg";

import challenge1_image from "images/challenges/challenge1-image.jpg";
import challenge1_idea1 from "images/challenges/challenge1-idea1.jpg";
import challenge1_idea2 from "images/challenges/challenge1-idea2.jpg";
import challenge1_idea3 from "images/challenges/challenge1-idea3.jpg";
import challenge1_idea4 from "images/challenges/challenge1-idea4.jpg";
import challenge1_idea5 from "images/challenges/challenge1-idea5.jpg";

import challenge2_image from "images/challenges/challenge2-image.jpg";
import challenge2_idea1 from "images/challenges/challenge2-idea1.jpg";
import challenge2_idea2 from "images/challenges/challenge2-idea2.jpg";

import challenge3_image from "images/challenges/challenge3-image.jpg";
import challenge3_idea1 from "images/challenges/challenge3-idea1.jpg";
import challenge3_idea2 from "images/challenges/challenge3-idea2.jpg";

const getRandomDate = (min: Date, max: Date) => {
	return new Date(
		min.getTime() + Math.random() * (max.getTime() - min.getTime())
	).toISOString();
};

const getRandomAnnouncementDate = () => {
	const min = new Date();
	min.setHours(min.getHours() + 72);

	const max = new Date();
	max.setHours(max.getHours() + 144);

	return getRandomDate(min, max);
};

const getRandomDeadline = () => {
	const min = new Date();
	min.setHours(min.getHours() + 24);

	const max = new Date();
	max.setHours(max.getHours() + 72);

	return getRandomDate(min, max);
};

const getRandomPublishedDate = () => {
	const min = new Date();
	min.setHours(min.getHours() + 3);

	const max = new Date();
	max.setHours(max.getHours() + 21);

	return getRandomDate(min, max);
};

const getRandomIdeaDate = () => {
	const min = new Date();
	min.setHours(min.getHours() + 1);

	const max = new Date();
	max.setHours(max.getHours() + 3);

	return getRandomDate(min, max);
};

const getRandomCommentDate = () => {
	const min = new Date();
	min.setHours(min.getHours() + 1);

	const max = new Date();
	max.setHours(max.getHours() + 3);

	return getRandomDate(min, max);
};

export const STORE: StoreItem[] = [
	{
		id: "stop-rural-exodus-in-alpine-valleys",
		user: "Philipp Schwab",
		sharingValue: "world",
		isPublished: true,
		isAnonymous: false,
		deadline: getRandomDeadline(),
		publishedDate: getRandomPublishedDate(),
		avatar: profile_philipp_schwab,
		title: "Stop rural exodus in alpine valleys",
		views: 291,
		likes: 753,
		dislikes: 38,
		ideasCount: 5,
		reward: 3200,
		announcementDate: getRandomAnnouncementDate(),
		ideas: [
			{
				id: "idea-1",
				user: "Jack Walker",
				avatar: profile_jack_walker,
				title: "High Speed Internet",
				text: `How about it is possible to have high speed internet in the lastpart of the valley to guarantee that people can work remote at home with a good video quality.`,
				likes: 938,
				dislikes: 222,
				image: challenge1_idea1,
				date: getRandomIdeaDate(),
				commentsCount: 1,
				comments: [
					{
						id: "1",
						user: "Anna Miller",
						avatar: profile_anna_miller,
						text:
							"That would really help, whereas realization might not be that easy!",
						likes: 48,
						dislikes: 0,
						date: getRandomCommentDate(),
					},
				],
			},
			{
				id: "idea-2",
				user: "Anna Miller",
				avatar: profile_anna_miller,
				title: "Delivery service (local restaurants, ...)",
				text: `Not only DHL and Amazon should deliver in the last corner on earth, local shops and local infrastructure like (several) reastaurants should deliver within, for example a 10k radius. People would love to have this kind of luxury in rural areas.`,
				likes: 749,
				dislikes: 180,
				image: challenge1_idea2,
				date: getRandomIdeaDate(),
				commentsCount: 0,
				comments: [],
			},
			{
				id: "idea-3",
				user: "Isabella Moore",
				avatar: profile_isabella_moore,
				title: "Hybrid club meetings (music, fire department, ...)",
				text: `It is difficult for people to get in contact with locals. In addition people are (often) used to work in the city and live on the country side. In Addition it might be difficult to esablish contacts with club meetings, because people are on the way back home or don´t know how get in contact. How about club meetings offer the possibility to offer hybrid meetings, where people can login online from home?`,
				likes: 583,
				dislikes: 139,
				image: challenge1_idea3,
				date: getRandomIdeaDate(),
				commentsCount: 0,
				comments: [],
			},
			{
				id: "idea-4",
				user: "Max Smith",
				avatar: profile_max_smith,
				title: "Perfect snow removal",
				text: `In some areas it might be difficult für several days a year to get to work due to the snow conditions. If the local community might guarantee, that the roads are snow-free betwenn 6 and 8 in the morning, it might help.`,
				likes: 435,
				dislikes: 89,
				image: challenge1_idea4,
				date: getRandomIdeaDate(),
				commentsCount: 0,
				comments: [],
			},
			{
				id: "idea-5",
				user: "Mia Johnson",
				avatar: profile_mia_johnson,
				title: "Better public transport",
				text: `Transport for kids (schools) is quite often good organized. In some regions the public transport doesnt help to support people to get to work in time.`,
				likes: 201,
				dislikes: 34,
				image: challenge1_idea5,
				date: getRandomIdeaDate(),
				commentsCount: 0,
				comments: [],
			},
		],
		text: `I am looking for innovative ideas to stop the rural exodus in alpine valleys. Are there ways to minimize the gap between the advantages of rural areas and cities? Solutions should somehow support the 17 sustainable development goals and local families should benefit as well.`,
		tags: ["rural", "exodus", "alpine", "valleys", "sustainable"],
		images: [challenge1_image],
	},
	{
		id: "save-people-during-hiking-tours",
		user: "Jack Walker",
		sharingValue: "world",
		isPublished: true,
		isAnonymous: false,
		deadline: getRandomDeadline(),
		publishedDate: getRandomPublishedDate(),
		avatar: profile_jack_walker,
		title: "Save people during hiking tours",
		views: 182,
		likes: 683,
		dislikes: 34,
		ideasCount: 49,
		reward: 4750,
		announcementDate: getRandomAnnouncementDate(),
		ideas: [
			{
				id: "idea-1",
				user: "Olivia Lopez",
				avatar: profile_olivia_lopez,
				title: "Emergency tracker for remote areas",
				text: `Imagine a small cube which you turn on at the beginning of your walking trip and it sendsa strong personalized signal every 1 to 5 minutes. If a helicopter (or drone) would receive the signal. It should have enough power for several days.`,
				likes: 593,
				dislikes: 133,
				image: challenge2_idea1,
				date: getRandomIdeaDate(),
				commentsCount: 0,
				comments: [],
			},
			{
				id: "idea-2",
				user: "Manuel Wilson",
				avatar: profile_manuel_wilson,
				title: "Tracking app",
				text: `Imagine an app whhere you enter your walking tour and it sends every minute a ping from your last location with GSM singal. It might help to find you more easily. In addition it might inform a contact person, if you don´t get to a predefined location with known GSM singal in time.`,
				likes: 382,
				dislikes: 77,
				image: challenge2_idea2,
				date: getRandomIdeaDate(),
				commentsCount: 0,
				comments: [],
			},
		],
		text: `Hi there. Every year people hurt themselfs on hiking tracks and the rescue chain will start several hours later, because people will be missed only an night (tourists, when the booked room ist empty). `,
		tags: ["hiking", "safety", "rescuechain", "selfhurting"],
		images: [challenge2_image],
	},

	{
		id: "focus-on-creative-thinking",
		user: "Mia Johnson",
		sharingValue: "company",
		isPublished: true,
		isAnonymous: false,
		deadline: getRandomDeadline(),
		publishedDate: getRandomPublishedDate(),
		avatar: profile_mia_johnson,
		title: "Focus on creative thinking",
		views: 95,
		likes: 239,
		dislikes: 95,
		ideasCount: 32,
		reward: 1800,
		announcementDate: getRandomAnnouncementDate(),
		ideas: [
			{
				id: "idea-1",
				user: "Kent Clark",
				avatar: profile_kent_clark,
				title: "Change work place and go outside",
				text: `Close Outlook, Slack and Teams, grab your Laptop and some paper, go on the roof terrasse, drink a coffee and see magic happening.`,
				likes: 229,
				dislikes: 32,
				image: challenge3_idea1,
				date: getRandomIdeaDate(),
				commentsCount: 0,
				comments: [],
			},
			{
				id: "idea-2",
				user: "Sophia Williams",
				avatar: profile_sophia_williams,
				title: "Google similar topics",
				text: `It get creative when i read about the topic, where i need to be creative. Google the topic and read articles, listen to podcasts. That might do the job.`,
				likes: 198,
				dislikes: 20,
				image: challenge3_idea2,
				date: getRandomIdeaDate(),
				commentsCount: 0,
				comments: [],
			},
		],
		text: `How can people be more creative during work? Does anyone have some thoughts about creativity? During daily business it is difficult to find time to be creative.`,
		tags: ["creativity", "dailybusiness", "workplace", "ideas"],
		images: [challenge3_image],
	},
];
