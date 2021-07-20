import React, { FC, useCallback, useState } from "react";
import { IonInput, IonButton, IonIcon } from "@ionic/react";

import profile_hansjoerg_rogen from "images/profiles/profile-hansjoerg-rogen.jpg";

import photoIcon from "icons/photo.svg";
import movieIcon from "icons/movie.svg";
import audioIcon from "icons/audio.svg";
import copyIcon from "icons/copy.svg";

import { Idea, Comment } from "utils";
import { Text } from "components";

import styles from "./new-comment.module.css";

type NewCommentProps = {
	idea: Idea;
	onSubmit: (idea: Idea, comment: Comment) => void;
};

export const NewComment: FC<NewCommentProps> = ({ idea, onSubmit }) => {
	const [text, setText] = useState<string>("");

	const changeHandler = useCallback((event) => {
		setText(event.detail.value);
	}, []);

	const submitHandler = useCallback(
		(event) => {
			onSubmit(idea, {
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
		[onSubmit, idea, text]
	);

	return (
		<div className={styles.wrapper}>

				<div className={styles.label}>
					<Text size="sm">Comment to {idea.user}</Text>
				</div>
				<div className={styles.input}>
					<IonInput
						value={text}
						autofocus={false}
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

		</div>
	);
};
