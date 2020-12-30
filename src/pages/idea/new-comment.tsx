import React, { FC, useCallback, useState } from "react";
import { IonInput, IonButton, IonIcon } from "@ionic/react";

import profile_hansjoerg_rogen from "images/profiles/profile-hansjoerg-rogen.jpg";

import photoIcon from "icons/photo.svg";
import movieIcon from "icons/movie.svg";
import audioIcon from "icons/audio.svg";
import copyIcon from "icons/copy.svg";

import { StoreItem, CommentItem } from "utils";
import { Container, Text } from "components";

import styles from "./new-comment.module.css";

type NewCommentProps = {
	storeItem: StoreItem;
	onSubmit: (newComment: CommentItem) => void;
};

export const NewComment: FC<NewCommentProps> = ({ storeItem, onSubmit }) => {
	const [text, setText] = useState<string>("");

	const changeHandler = useCallback((event) => {
		setText(event.detail.value);
	}, []);

	const submitHandler = useCallback(
		(event) => {
			onSubmit({
				id: `comment-${Math.random().toString(36)}`,
				user: "Hansjörg Rogen",
				avatar: profile_hansjoerg_rogen,
				date: new Date().toISOString(),
				text,
				likes: 0,
				dislikes: 0,
			});
			setText("");
		},
		[onSubmit, text]
	);

	return (
		<div className={styles.wrapper}>
			<Container>
				<div className={styles.label}>
					<Text size="sm">Comment to {storeItem.user}</Text>
				</div>
				<div className={styles.input}>
					<IonInput
						value={text}
						autofocus={true}
						onIonChange={changeHandler}
						placeholder="Write your comment"
					/>
				</div>

				<div className={styles.actions}>
					<div className={styles.submit}>
						<IonButton
							color="main"
							fill="clear"
							size="small"
							disabled={!text}
							onClick={submitHandler}
						>
							Post
						</IonButton>
					</div>
					<div className={styles.media}>
						<IonButton color="main" fill="clear" size="small">
							<IonIcon
								slot="icon-only"
								size="small"
								src={photoIcon}
							/>
						</IonButton>
						<IonButton color="main" fill="clear" size="small">
							<IonIcon
								slot="icon-only"
								size="small"
								src={movieIcon}
							/>
						</IonButton>
						<IonButton color="main" fill="clear" size="small">
							<IonIcon
								slot="icon-only"
								size="small"
								src={audioIcon}
							/>
						</IonButton>
						<IonButton color="main" fill="clear" size="small">
							<IonIcon
								slot="icon-only"
								size="small"
								src={copyIcon}
							/>
						</IonButton>
					</div>
				</div>
			</Container>
		</div>
	);
};
