import React, { Fragment, FC, useCallback, useMemo } from "react";
import { IonIcon, IonItem, IonLabel, IonDatetime } from "@ionic/react";

import clockIcon from "icons/clock.svg";

import { Countdown } from "./countdown";

import styles from "./deadline.module.css";

type DeadlineProps = {
	deadline: string;
	onChange: (deadline: string) => void;
};

export const Deadline: FC<DeadlineProps> = ({ deadline, onChange }) => {
	const min = useMemo(() => {
		const min = new Date();
		min.setDate(min.getDate() + 1);
		return min.toISOString();
	}, []);
	const max = useMemo(() => {
		const max = new Date();
		max.setFullYear(max.getFullYear() + 1);
		return max.toISOString();
	}, []);

	const changeHandler = useCallback(
		(event) => {
			onChange(event.detail.value);
		},
		[onChange]
	);

	return (
		<Fragment>
			<IonItem lines="full">
				<IonIcon icon={clockIcon} slot="start" />
				<IonLabel>Voting deadline</IonLabel>
				<IonDatetime
					min={min}
					max={max}
					value={deadline}
					placeholder="Add date"
					displayFormat="DD / MM / YYYY"
					onIonChange={changeHandler}
				/>
			</IonItem>
			{deadline && (
				<div className={styles.countdown}>
					<Countdown endDate={deadline} />
				</div>
			)}
		</Fragment>
	);
};
