import React, { FC, useMemo, useCallback } from "react";
import { IonButton, IonLabel, IonIcon } from "@ionic/react";

import likeIcon from "icons/like.svg";
import dislikeIcon from "icons/dislike.svg";
import commentIcon from "icons/comment.svg";
import messageIcon from "icons/message.svg";
import uploadIcon from "icons/upload.svg";

import { StoreItem } from "utils";

import styles from "./action-buttons.module.css";

type ActionButtonsProps = {
	storeItem: StoreItem;
	showNumbers?: boolean;
	onClickLike?: (event: MouseEvent) => void;
	onClickDislike?: (event: MouseEvent) => void;
	onClickComment?: (event: MouseEvent) => void;
	onClickMessage?: (event: MouseEvent) => void;
	onClickShare?: (event: MouseEvent) => void;
};

export const ActionButtons: FC<ActionButtonsProps> = ({
	storeItem,
	showNumbers = true,
	onClickLike = () => {},
	onClickDislike = () => {},
	onClickComment = () => {},
	onClickMessage = () => {},
	onClickShare = () => {},
}) => {
	const showShareButton = useMemo(() => {
		switch (storeItem.sharingValue) {
			case "world":
			case "followers":
				return true;
			default:
				return false;
		}
	}, [storeItem.sharingValue]);

	const likeHandler = useCallback(
		(event) => {
			onClickLike(event);
		},
		[onClickLike]
	);
	const dislikeHandler = useCallback(
		(event) => {
			onClickDislike(event);
		},
		[onClickDislike]
	);
	const commentHandler = useCallback(
		(event) => {
			onClickComment(event);
		},
		[onClickComment]
	);
	const messageHandler = useCallback(
		(event) => {
			onClickMessage(event);
		},
		[onClickMessage]
	);
	const shareHandler = useCallback(
		(event) => {
			onClickShare(event);
		},
		[onClickShare]
	);

	return (
		<div className={styles.wrapper}>
			<IonButton
				color="dark"
				fill="clear"
				size="small"
				onClick={likeHandler}
				className={styles.button}
			>
				<IonIcon slot="start" size="small" src={likeIcon} />
				{showNumbers && <IonLabel>{storeItem.likes}</IonLabel>}
			</IonButton>
			<IonButton
				color="dark"
				fill="clear"
				size="small"
				onClick={dislikeHandler}
				className={styles.button}
			>
				<IonIcon slot="start" size="small" src={dislikeIcon} />
				{showNumbers && <IonLabel>{storeItem.dislikes}</IonLabel>}
			</IonButton>
			<IonButton
				color="dark"
				fill="clear"
				size="small"
				onClick={commentHandler}
				className={styles.button}
			>
				<IonIcon slot="start" size="small" src={commentIcon} />
				{showNumbers && <IonLabel>{storeItem.comments}</IonLabel>}
			</IonButton>
			<IonButton
				color="dark"
				fill="clear"
				size="small"
				onClick={messageHandler}
				className={styles.button}
			>
				<IonIcon slot="icon-only" size="small" src={messageIcon} />
			</IonButton>
			{showShareButton && (
				<IonButton
					color="dark"
					fill="clear"
					size="small"
					onClick={shareHandler}
					className={styles.button}
				>
					<IonIcon slot="icon-only" size="small" src={uploadIcon} />
				</IonButton>
			)}
		</div>
	);
};
