import React, { FC, Fragment, useMemo } from "react";

import { calculateTimeDifference } from "utils";

type TimeDifferenceProps = {
	date: string;
	fallback?: string;
};

export const TimeDifference: FC<TimeDifferenceProps> = ({ date, fallback }) => {
	const TimeDifference = useMemo(() => {
		const TimeDifference = calculateTimeDifference(date);
		if (TimeDifference === false) {
			return fallback;
		}

		const { days, hours, minutes } = TimeDifference;

		return [
			days ? `${days}d` : "",
			hours ? `${hours}h` : "",
			minutes ? `${minutes}m` : "",
		].join(" ");
	}, [date, fallback]);

	return <Fragment>{TimeDifference}</Fragment>;
};
