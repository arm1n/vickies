import React, { FC, useCallback } from "react";
import { IonButton, IonLabel, IonIcon } from "@ionic/react";

import { eyeOutline } from "ionicons/icons";

import likeIcon from "icons/like.svg";
import dislikeIcon from "icons/dislike.svg";
import ideasIcon from "icons/idea.svg";

import { StoreItem } from "utils";

import styles from "./action-buttons.module.css";

type ActionButtonsChallengeDefaultProps = {
	storeItem: StoreItem;
	onClickButton?: (event: MouseEvent) => void;
};

export const ActionButtonsChallengeDefault: FC<ActionButtonsChallengeDefaultProps> = ({
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
				onClick={clickButtonHandler}
				className={styles.button}
			>
				<IonIcon
					slot="start"
					size="small"
					src={eyeOutline}
					className="reset-stroke-width"
				/>
				<IonLabel>{storeItem.views}</IonLabel>
			</IonButton>
			<IonButton
				color="dark"
				fill="clear"
				size="small"
				onClick={clickButtonHandler}
				className={styles.button}
			>
				<IonIcon slot="start" size="small" src={ideasIcon} />
				<IonLabel>{storeItem.ideasCount}</IonLabel>
			</IonButton>
			<IonButton
				color="dark"
				fill="clear"
				size="small"
				onClick={clickButtonHandler}
				className={styles.button}
			>
				<IonIcon slot="start" size="small" src={likeIcon} />
				<IonLabel>{storeItem.likes}</IonLabel>
			</IonButton>
			<IonButton
				color="dark"
				fill="clear"
				size="small"
				onClick={clickButtonHandler}
				className={styles.button}
			>
				<IonIcon slot="start" size="small" src={dislikeIcon} />
				<IonLabel>{storeItem.dislikes}</IonLabel>
			</IonButton>
		</div>
	);
};
