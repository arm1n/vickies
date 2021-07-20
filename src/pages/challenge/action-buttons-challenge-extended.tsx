import React, { FC, useCallback } from "react";
import { IonButton, IonLabel, IonIcon } from "@ionic/react";

import { timerOutline, trophyOutline, flagOutline } from "ionicons/icons";

import { StoreItem } from "utils";

import styles from "../shared/action-buttons.module.css";

type ActionButtonsChallengeExtendedProps = {
	storeItem: StoreItem;
	onClickButton?: (event: MouseEvent) => void;
};

export const ActionButtonsChallengeExtended: FC<ActionButtonsChallengeExtendedProps> = ({
	storeItem,
	onClickButton = () => {},
}) => {
	const clickButtonHandler = useCallback(
		(event) => {
			onClickButton(event);
		},
		[onClickButton]
	);

	return (
		<div className={styles.wrapper}>
			<IonButton
				color="dark"
				fill="clear"
				size="small"
				className={styles.button}
				onClick={clickButtonHandler}
			>
				<IonIcon
					slot="start"
					size="small"
					src={trophyOutline}
					className="reset-stroke-width"
				/>
				<IonLabel>
					{new Intl.NumberFormat().format(storeItem.reward)}
				</IonLabel>
			</IonButton>
			<IonButton
				color="dark"
				fill="clear"
				size="small"
				className={styles.button}
				onClick={clickButtonHandler}
			>
				<IonIcon
					slot="start"
					size="small"
					src={timerOutline}
					className="reset-stroke-width"
				/>
				<IonLabel>
					{new Date(storeItem.deadline).toLocaleString("de-DE", {
						year: "numeric",
						month: "2-digit",
						day: "2-digit",
					})}
				</IonLabel>
			</IonButton>

			<IonButton
				color="dark"
				fill="clear"
				size="small"
				className={styles.button}
				onClick={clickButtonHandler}
			>
				<IonIcon
					slot="start"
					size="small"
					src={flagOutline}
					className="reset-stroke-width"
				/>
				<IonLabel>
					{new Date(storeItem.announcementDate).toLocaleString(
						"de-DE",
						{
							year: "numeric",
							month: "2-digit",
							day: "2-digit",
						}
					)}
				</IonLabel>
			</IonButton>
		</div>
	);
};
