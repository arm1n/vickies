import React, { useMemo } from "react";
import type { FC } from "react";

import { IonToolbar, IonIcon, IonButton, IonButtons } from "@ionic/react";

import type { StoreItem } from 'utils';

import { mail, shareSocial } from "ionicons/icons";

import styles from "./buttons-toolbar.module.css";

type ButtonsToolbarProps = {
	storeItem: StoreItem;
};

export const ButtonsToolbar: FC<ButtonsToolbarProps> = ({ storeItem }) => {
	const showShareButton = useMemo(() => {
		switch (storeItem.sharingValue) {
			case "world":
			case "followers":
				return true;
			default:
				return false;
		}
	}, [storeItem.sharingValue]);

	const showMessageButton = useMemo(
		() => storeItem.user !== "Hansjörg Rogen",
		[storeItem.user]
	);

	return (
	<IonToolbar>
		{(showMessageButton || showShareButton) && <IonButtons slot="start" className={styles.buttons}>
			{showMessageButton && <IonButton>
				<IonIcon slot="icon-only" icon={mail} />
			</IonButton>}
			{showShareButton && <IonButton>
				<IonIcon slot="icon-only" icon={shareSocial} />
			</IonButton>}
		</IonButtons>}
		<IonButtons slot="end" className={styles.buttons}>
			<IonButton color="main">Add idea</IonButton>
		</IonButtons>
	</IonToolbar>
)};
