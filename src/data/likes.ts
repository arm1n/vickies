import { StoreItem } from "utils";
import { STORE } from "./store";

const getRandomStoreItem = () => STORE[~~(Math.random() * STORE.length)];

export const LIKES: StoreItem[] = [];

do {
	const item = getRandomStoreItem();
	if (LIKES.indexOf(item) >= 0) {
		continue;
	}

	LIKES.push(item);
} while (LIKES.length < 3)


