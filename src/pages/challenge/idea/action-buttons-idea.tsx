import React, { FC, useCallback } from "react";
import { IonButton, IonLabel, IonIcon } from "@ionic/react";

import likeIcon from "icons/like.svg";
import dislikeIcon from "icons/dislike.svg";
import commentIcon from "icons/comment.svg";
import messageIcon from "icons/message.svg";
import uploadIcon from "icons/upload.svg";

import { Idea } from "utils";

import styles from "../../shared/action-buttons.module.css";

type ActionButtonsIdeaProps = {
	idea: Idea;
	onClickButton?: (event: MouseEvent) => void;
};

export const ActionButtonsIdea: FC<ActionButtonsIdeaProps> = ({
	idea,
	onClickButton = () => {},
}) => {
	const clickHandler = useCallback(
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
				onClick={clickHandler}
				className={styles.button}
			>
				<IonIcon slot="start" size="small" src={likeIcon} />
				<IonLabel>{idea.likes}</IonLabel>
			</IonButton>
			<IonButton
				color="dark"
				fill="clear"
				size="small"
				onClick={clickHandler}
				className={styles.button}
			>
				<IonIcon slot="start" size="small" src={dislikeIcon} />
				<IonLabel>{idea.dislikes}</IonLabel>
			</IonButton>
			<IonButton
				color="dark"
				fill="clear"
				size="small"
				onClick={clickHandler}
				className={styles.button}
			>
				<IonIcon slot="start" size="small" src={commentIcon} />
				<IonLabel>{idea.commentsCount}</IonLabel>
			</IonButton>

			<IonButton
				color="dark"
				fill="clear"
				size="small"
				onClick={clickHandler}
				className={styles.button}
			>
				<IonIcon slot="icon-only" size="small" src={messageIcon} />
			</IonButton>

			<IonButton
				color="dark"
				fill="clear"
				size="small"
				onClick={clickHandler}
				className={styles.button}
			>
				<IonIcon slot="icon-only" size="small" src={uploadIcon} />
			</IonButton>
		</div>
	);
};
