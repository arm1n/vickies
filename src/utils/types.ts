export type SharingValue =
	| "world"
	| "company"
	| "department"
	| "team"
	| "followers";

export type Idea = {
	title: string;
	text: string;
	tags: string[];
	images: string[];
	deadline: string;
	isAnonymous: boolean;
	sharingValue: SharingValue;
	isPublished: boolean;
	publishedDate: string;
};

export type CommentItem = {
	id: string;
	user: string;
	avatar: string;
	text: string;
	likes: number;
	dislikes: number;
	date: string;
}

export type StoreItem = Idea & {
	id: string;
	user: string;
	avatar: string;
	likes: number;
	dislikes: number;
	comments: number;
	commentItems: CommentItem[];
};
