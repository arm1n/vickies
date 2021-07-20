import React, { FC, Fragment, useMemo, useState, useCallback } from "react";
import {
	IonItem,
	IonLabel,
	IonIcon,
	IonButton,
	IonAvatar,
	IonPopover,
	IonList,
	IonListHeader,
} from "@ionic/react";
import { ellipsisHorizontal } from "ionicons/icons";

import { Text } from "components";
import { Idea, Comment } from "utils";

import { TimeDifference } from "../../shared/time-difference";

import styles from "./comments.module.css";

type CommentsProps = {
	idea: Idea;
};

export const Comments: FC<CommentsProps> = ({ idea }) => {
	const sortedComments = useMemo(() => {
		const sortedComments = [...idea.comments];

		sortedComments.sort(
			({ date: dateA }, { date: dateB }) =>
				new Date(dateB).getTime() - new Date(dateA).getTime()
		);

		return sortedComments;
	}, [idea.comments]);

	return sortedComments.length > 0 ? (
		<Fragment>
			{sortedComments.map((comment, index) => {
				return (
					<div key={index}>
						<CommentsItem idea={idea} comment={comment} />
						<hr />
					</div>
				);
			})}
		</Fragment>
	) : (
		<div className={styles.empty}>
			<Text>No comments yet - be the first one!</Text>
		</div>
	);
};

type CommentProps = {
	idea: Idea;
	comment: Comment;
};

const CommentsItem: FC<CommentProps> = ({ idea, comment }) => {
	const [popoverEvent, setPopoverEvent] = useState<MouseEvent | undefined>(
		undefined
	);
	const showPopover = useMemo(() => !!popoverEvent, [popoverEvent]);

	const showPopoverHandler = useCallback((event) => {
		event.persist();
		event.stopPropagation();
		setPopoverEvent(event.nativeEvent);
	}, []);
	const hidePopoverHandler = useCallback((event) => {
		event.stopPropagation();
		setPopoverEvent(undefined);
	}, []);

	return (
		<IonItem lines="none" className={styles.comment}>
			<IonAvatar slot="start" className={styles.avatar}>
				<img src={comment.avatar} alt={comment.user} />
			</IonAvatar>
			<IonLabel className={styles.label}>
				<div>
					<Text bold={true}>{comment.user}</Text>{" "}
					<Text size="sm">
						<TimeDifference
							date={comment.date}
							fallback="just now"
						/>
					</Text>
				</div>
				<div>
					<Text size="sm">answer to {idea.user}</Text>
				</div>
				<div className={`${styles.text} ion-text-wrap`}>
					{comment.text}
				</div>
			</IonLabel>
			<div slot="end">
				<IonPopover
					event={popoverEvent}
					isOpen={showPopover}
					cssClass="my-custom-class"
					onDidDismiss={hidePopoverHandler}
				>
					<IonList>
						<IonListHeader>
							<IonLabel>Actions</IonLabel>
						</IonListHeader>
						<IonItem button={true}>Report comment</IonItem>
						<IonItem button={true} lines="none">
							Hide comment
						</IonItem>
					</IonList>
				</IonPopover>
				<IonButton
					color="medium"
					fill="clear"
					size="small"
					onClick={showPopoverHandler}
				>
					<IonIcon
						slot="icon-only"
						size="small"
						icon={ellipsisHorizontal}
					/>
				</IonButton>
			</div>
		</IonItem>
	);
};
