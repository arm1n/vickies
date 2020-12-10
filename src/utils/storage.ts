export const setItem = (key: string, data: any) => {
	try {
		localStorage.setItem(key, JSON.stringify(data));
	} catch(e) {
		console.error(e);
	}
};

export const getItem = (key: string) => {
	try {
		const item = localStorage.getItem(key);
		if (item === null) {
			return null;
		}

		return JSON.parse(item);
	} catch(e) {
		console.error(e);
	}
};