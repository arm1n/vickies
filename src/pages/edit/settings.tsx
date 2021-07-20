import React, { Fragment, FC, useCallback, useMemo } from "react";
import {
	IonItem,
	IonLabel,
	IonIcon,
	IonInput,
	IonCheckbox,
	IonSelect,
	IonSelectOption,
	IonDatetime,
} from "@ionic/react";
import { eyeOffOutline, trophyOutline, flagOutline } from "ionicons/icons";

import worldIcon from "icons/world.svg";
import personIcon from "icons/person.svg";
import communityIcon from "icons/community.svg";

import { SharingValue } from "utils";

import styles from "./settings.module.css";

export type SharingOption = {
	value: SharingValue;
	label: string;
	icon: string;
};

export const SHARING_OPTIONS: SharingOption[] = [
	{ value: "world", label: "world", icon: worldIcon },
	{ value: "company", label: "company", icon: communityIcon },
	{ value: "department", label: "department", icon: communityIcon },
	{ value: "team", label: "team", icon: communityIcon },
	{ value: "followers", label: "my followers", icon: personIcon },
];

type SettingsProps = {
	deadline: string;
	reward: number | undefined;
	announcementDate: string;
	sharingValue: SharingValue;
	isAnonymous: boolean;
	onChangeReward: (reward: number) => void;
	onChangeAnnouncementDate: (announcementDate: string) => void;
	onChangeSharingValue: (sharingValue: SharingValue) => void;
	onChangeIsAnonymous: (isAnonymous: boolean) => void;
};

export const Settings: FC<SettingsProps> = ({
	deadline,
	reward,
	announcementDate,
	sharingValue,
	isAnonymous,
	onChangeReward,
	onChangeAnnouncementDate,
	onChangeSharingValue,
	onChangeIsAnonymous,
}) => {
	const minAnnouncementDate = useMemo(() => {
		if (!deadline) {
			return undefined;
		}

		const min = new Date(deadline);
		min.setHours(min.getHours());
		return min.toISOString();
	}, [deadline]);
	const maxAnnouncementDate = useMemo(() => {
		if (!deadline) {
			return undefined;
		}

		const max = new Date(deadline);
		max.setHours(max.getHours() + 120);
		return max.toISOString();
	}, [deadline]);

	const changeRewardHandler = useCallback(
		(event) => {
			onChangeReward(+event.detail.value);
		},
		[onChangeReward]
	);
	const changeAnnouncementDateHandler = useCallback(
		(event) => {
			onChangeAnnouncementDate(event.detail.value);
		},
		[onChangeAnnouncementDate]
	);
	const changeSharingHandler = useCallback(
		(event) => {
			onChangeSharingValue(event.detail.value);
		},
		[onChangeSharingValue]
	);

	const changeIsAnonymousHandler = useCallback(
		(event) => {
			onChangeIsAnonymous(event.detail.checked);
		},
		[onChangeIsAnonymous]
	);

	const sharingOption = useMemo<SharingOption>(
		() =>
			SHARING_OPTIONS.find(({ value }) => value === sharingValue) ||
			SHARING_OPTIONS[0],
		[sharingValue]
	);

	return (
		<Fragment>
			<IonItem lines="full">
				<IonIcon
					slot="start"
					icon={trophyOutline}
					className="reset-stroke-width"
				/>
				<IonLabel>Reward for winner</IonLabel>
				<IonInput
					slot="end"
					type="number"
					inputmode="numeric"
					value={reward}
					placeholder="Add reward"
					onIonChange={changeRewardHandler}
					className={styles.reward}
				/>
			</IonItem>
			<IonItem lines="full">
				<IonIcon
					slot="start"
					icon={flagOutline}
					className="reset-stroke-width"
				/>
				<IonLabel>Announcement date</IonLabel>
				<IonDatetime
					min={minAnnouncementDate}
					max={maxAnnouncementDate}
					value={announcementDate}
					placeholder="Add date"
					displayFormat="DD / MM / YYYY"
					onIonChange={changeAnnouncementDateHandler}
				/>
			</IonItem>
			<IonItem lines="full">
				<IonIcon slot="start" icon={sharingOption.icon} />
				<IonLabel>Share challenge with</IonLabel>
				<IonSelect
					interface="alert"
					interfaceOptions={{
						header: "Share settings",
						subHeader: "Who shall see your challenge?",
					}}
					value={sharingValue}
					onIonChange={changeSharingHandler}
				>
					{SHARING_OPTIONS.map(({ value, label, icon }) => (
						<IonSelectOption key={value} value={value}>
							<IonIcon slot="start" icon={icon} />
							<IonLabel>{label}</IonLabel>
						</IonSelectOption>
					))}
				</IonSelect>
			</IonItem>
			<IonItem lines="full">
				<IonIcon slot="start" icon={eyeOffOutline} />
				<IonLabel>Post challenge anonymously</IonLabel>
				<IonCheckbox
					color="main"
					checked={isAnonymous}
					onIonChange={changeIsAnonymousHandler}
				/>
			</IonItem>
		</Fragment>
	);
};
