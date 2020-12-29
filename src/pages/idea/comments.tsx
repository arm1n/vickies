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

import { Container, Text } from "components";
import { StoreItem, CommentItem } from "utils";

import { TimeDifference } from "../shared/time-difference";

import styles from "./comments.module.css";

type CommentsProps = {
	storeItem: StoreItem;
};

export const Comments: FC<CommentsProps> = ({ storeItem }) => {
	const sortedComments = useMemo(() => {
		const sortedComments = [...storeItem.commentItems];

		sortedComments.sort(
			({ date: dateA }, { date: dateB }) =>
				new Date(dateB).getTime() - new Date(dateA).getTime()
		);

		return sortedComments;
	}, [storeItem.commentItems]);

	return sortedComments.length > 0 ? (
		<Fragment>
			{sortedComments.map((commentItem, index) => {
				return (
					<div key={index}>
						<Comment
							storeItem={storeItem}
							commentItem={commentItem}
						/>
						<hr />
					</div>
				);
			})}
		</Fragment>
	) : (
		<div className={styles.empty}>
			<Container><Text>No comments yet - be the first one!</Text></Container>
		</div>
	);
};

type CommentProps = {
	storeItem: StoreItem;
	commentItem: CommentItem;
};

const Comment: FC<CommentProps> = ({ storeItem, commentItem }) => {
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
				<img src={commentItem.avatar} alt={commentItem.user} />
			</IonAvatar>
			<IonLabel className={styles.label}>
				<div>
					<Text bold={true}>{commentItem.user}</Text>{" "}
					<Text size="sm">
						<TimeDifference
							date={commentItem.date}
							fallback="just now"
						/>
					</Text>
				</div>
				<div>
					<Text size="sm">answer to {storeItem.user}</Text>
				</div>
				<div className={`${styles.text} ion-text-wrap`}>
					{commentItem.text}
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
