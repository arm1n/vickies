export type SharingValue =
	| "world"
	| "company"
	| "department"
	| "team"
	| "followers";

export type Comment = {
	id: string;
	user: string;
	avatar: string;
	text: string;
	likes?: number;
	dislikes?: number;
	date: string;
};

export type Idea = {
	id: string;
	user: string;
	avatar: string;
	title: string;
	text: string;
	likes?: number;
	dislikes?: number;
	image?: string;
	date: string;
	commentsCount?: number;
	comments: Comment[];
};

export type Challenge = {
	title: string;
	text: string;
	tags: string[];
	reward: number;
	images: string[];
	deadline: string;
	isAnonymous: boolean;
	sharingValue: SharingValue;
	isPublished: boolean;
	publishedDate: string;
	announcementDate: string;
};

export type StoreItem = Challenge & {
	id: string;
	user: string;
	avatar: string;
	likes?: number;
	dislikes?: number;
	views?: number;

	ideasCount?: number;
	ideas: Idea[];
};
