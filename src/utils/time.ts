export type RemainingTime = {
	days: number;
	hours: number;
	minutes: number;
	seconds: number;
};

export const calculateRemainingTime = (endDate: string): RemainingTime | false => {
	const end = new Date(endDate).getTime();
	const now = new Date().getTime();
	const timeLeft = end - now;
	if (timeLeft < 0) {
		return false;
	}


	const days = ~~(timeLeft / (1000 * 60 * 60 * 24));
	const hours = ~~((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	const minutes = ~~((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = ~~((timeLeft % (1000 * 60)) / 1000);

	return { days, hours, minutes, seconds };
};
