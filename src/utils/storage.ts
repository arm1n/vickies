export const setItem = <T>(key: string, data: T) => {
	try {
		localStorage.setItem(key, JSON.stringify(data));
	} catch(e) {
		console.error(e);
	}
};

export const getItem = <T = any>(key: string): T | null => {
	try {
		const item = localStorage.getItem(key);
		if (item === null) {
			return null;
		}

		return JSON.parse(item);
	} catch(e) {
		console.error(e);
		return null;
	}
};

export const removeItem = (key: string) => {
	try {
		localStorage.removeItem(key);
	} catch(e) {
		console.error(e);
	}
}