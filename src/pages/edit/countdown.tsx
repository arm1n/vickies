import React, { FC, useEffect, useState, useMemo } from "react";

import { Text } from "components";
import { calculateRemainingTime, RemainingTime } from "utils";

import styles from "./countdown.module.css";

type CountdownProps = {
	endDate: string;
	color?: "default" | "inverse"
};

export const Countdown: FC<CountdownProps> = ({ endDate, color = "default" }) => {
	const [remainingTime, setRemainingTime] = useState<RemainingTime>({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
	});
	const { days, hours, minutes, seconds } = remainingTime;
	const [isDone, setIsDone] = useState(false);

	const wrapperClassNames = useMemo(() => [styles.wrapper, styles[color]].join(' '), [color]);

	const textColor = useMemo(() => color === 'inverse' ? 'main' : 'dark', [color]);

	useEffect(() => {
		const handler = () => {
			const remainingTime = calculateRemainingTime(endDate);
			if (remainingTime === false) {
				setIsDone(true);
				return;
			}

			setRemainingTime(remainingTime);
		};

		handler();
		const intervalId = setInterval(handler, 1000);

		return () => clearInterval(intervalId);
	}, [endDate]);

	return !isDone ? (
		<div className={wrapperClassNames}>
			{days ? (
				<div>
					<Text color={textColor} bold={true}>{days}d</Text>
				</div>
			) : null}
			{hours ? (
				<div>
					<Text color={textColor} bold={true}>{hours}h</Text>
				</div>
			) : null}
			{minutes ? (
				<div>
					<Text color={textColor} bold={true}>{minutes}m</Text>
				</div>
			) : null}
			{seconds ? (
				<div>
					<Text color={textColor} bold={true}>{seconds}s</Text>
				</div>
			) : null}
		</div>
	) : null;
};
