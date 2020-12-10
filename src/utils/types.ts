export type SharingValue = "world" | "company" | "department" | "team" | "followers";

export type Idea = {
	title: string;
	text: string;
	tags?: string[];
	images?: string[];
	deadline?: string;
	isAnonymous?: boolean;
	sharingValue?: SharingValue;
	isPublished: boolean;
};