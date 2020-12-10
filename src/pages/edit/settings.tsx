import React, { Fragment, FC, useCallback, useMemo } from "react";
import {
	IonItem,
	IonLabel,
	IonIcon,
	IonCheckbox,
	IonSelect,
	IonSelectOption,
} from "@ionic/react";
import { eyeOffOutline } from "ionicons/icons";

import worldIcon from "icons/world.svg";
import personIcon from "icons/person.svg";
import communityIcon from "icons/community.svg";

import { SharingValue } from "utils";

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
	sharingValue: SharingValue;
	isAnonymous: boolean;
	onChangeSharingValue: (sharingValue: SharingValue) => void;
	onChangeIsAnonymous: (isAnonymous: boolean) => void;
};

export const Settings: FC<SettingsProps> = ({
	sharingValue,
	isAnonymous,
	onChangeSharingValue,
	onChangeIsAnonymous,
}) => {
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
				<IonIcon slot="start" icon={sharingOption.icon} />
				<IonLabel>Share my vicky with</IonLabel>
				<IonSelect
					interface="alert"
					interfaceOptions={{
						header: "Share settings",
						subHeader: "Who shall see your vickie?",
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
				<IonLabel>Post my vicky anonymously</IonLabel>
				<IonCheckbox
					color="main"
					checked={isAnonymous}
					onIonChange={changeIsAnonymousHandler}
				/>
			</IonItem>
		</Fragment>
	);
};
