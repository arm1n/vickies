import React, { FC, Fragment, useCallback } from "react";
import { IonButton, IonLabel, IonIcon } from "@ionic/react";

import { eyeOutline, trophyOutline } from "ionicons/icons";

import likeIcon from "icons/like.svg";
import dislikeIcon from "icons/dislike.svg";
import ideasIcon from "icons/idea.svg";

import { StoreItem } from "utils";

import styles from "./action-buttons.module.css";

export enum VIEW_MODE {
	OVERVIEW,
	DETAIL,
}

type ActionButtonsChallengeDefaultProps = {
	storeItem: StoreItem;
	viewMode?: VIEW_MODE;
	onClickButton?: (event: MouseEvent) => void;
};

export const ActionButtonsChallengeDefault: FC<
	ActionButtonsChallengeDefaultProps
> = ({
	storeItem,
	viewMode = VIEW_MODE.OVERVIEW,
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
			{viewMode === VIEW_MODE.OVERVIEW ? (
				<Fragment>
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
				</Fragment>
			) : viewMode === VIEW_MODE.DETAIL ? (
				<Fragment>
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
				</Fragment>
			) : null}
		</div>
	);
};
