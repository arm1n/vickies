import React, { FC, useState, useMemo, useCallback } from "react";
import {
	IonList,
	IonItem,
	IonListHeader,
	IonAvatar,
	IonButton,
	IonLabel,
	IonIcon,
	IonSlides,
	IonSlide,
	IonPopover,
} from "@ionic/react";
import { ellipsisHorizontal } from "ionicons/icons";

import likeIcon from "icons/like.svg";
import dislikeIcon from "icons/dislike.svg";
import commentIcon from "icons/comment.svg";
import messageIcon from "icons/message.svg";
import uploadIcon from "icons/upload.svg";

import { Text, Title } from "components";

import styles from "./stream-item.module.css";

type StreamItemProps = {
	user: string;
	avatar: string;
	time: string;
	title: string;
	text: string;
	tags?: string[];
	likes: number;
	dislikes: number;
	comments: number;
	images?: string[];
};

export const StreamItem: FC<StreamItemProps> = ({
	avatar,
	user,
	title,
	time,
	text,
	tags = [],
	images = [],
	likes,
	dislikes,
	comments,
}) => {
	const [showTags, setShowTags] = useState(() => text.length < 125);
	const [popoverEvent, setPopoverEvent] = useState<MouseEvent | undefined>(
		undefined
	);

	const showPopoverHandler = useCallback((event) => {
		event.persist();
		setPopoverEvent(event.nativeEvent);
	}, []);
	const hidePopoverHandler = useCallback((event) => {
		setPopoverEvent(undefined);
	}, []);

	const showPopover = useMemo(() => !!popoverEvent, [popoverEvent]);
	const sliderOptions = useMemo(
		() => ({
			observer: true,
			observeParents: true,
			pagination: {
				type: "bullets",
				el: `.${styles.pager}`,
				bulletClass: styles.pageritem,
				bulletActiveClass: styles.pageritemactive,
			},
		}),
		[]
	);

	return (
		<div className={styles.wrapper}>
			<div className={styles.profile}>
				<IonAvatar className={styles.avatar}>
					<img src={avatar} alt={user} className={styles.avatarimg} />
				</IonAvatar>
			</div>
			<div className={styles.content}>
				<div className={styles.header}>
					<div className={styles.meta}>
						<div className={styles.title}>
							<Title tag="h4" type="special" noMargin={true}>
								{title}
							</Title>
						</div>
						<div className={styles.subtitle}>
							<Text size="sm">
								<span className={styles.postedby}>
									by {user}
								</span>
								<span> </span>
								<span className={styles.postedat}>
									<Text color="main" size="sm" bold={true}>
										- {time}
									</Text>
								</span>
							</Text>
						</div>
					</div>
					<div className={styles.trigger}>
						<IonPopover
							event={popoverEvent}
							isOpen={showPopover}
							cssClass="my-custom-class"
							onDidDismiss={hidePopoverHandler}
						>
							<IonList>
								<IonListHeader>
									<IonLabel>Aktionen</IonLabel>
								</IonListHeader>
								<IonItem button={true}>Melden</IonItem>
								<IonItem button={true} lines="none">Ausblenden</IonItem>
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
				</div>
				<div className={styles.text}>
					<Text
						nl2br={true}
						truncate={125}
						expandable={true}
						onToggleMore={setShowTags}
					>
						{text}
					</Text>
				</div>
				{showTags && (
					<div className={styles.tags}>
						{tags.map((tag, index) => (
							<span className={styles.tag} key={index}>
								<Text color="main">#{tag}</Text>
							</span>
						))}
					</div>
				)}

				{images.length > 0 && (
					<div className={styles.images}>
						<div className={styles.pager} />
						<IonSlides
							pager={true}
							options={sliderOptions}
							className={styles.slider}
						>
							{images.map((image, index) => (
								<IonSlide key={index} className={styles.slide}>
									<img
										className={styles.image}
										src={image}
										width="400"
										alt=""
									/>
								</IonSlide>
							))}
						</IonSlides>
					</div>
				)}

				<div className={styles.actions}>
					<IonButton
						color="dark"
						fill="clear"
						size="small"
						className={styles.actionbutton}
					>
						<IonIcon slot="start" size="small" src={likeIcon} />
						<IonLabel>{likes}</IonLabel>
					</IonButton>
					<IonButton
						color="dark"
						fill="clear"
						size="small"
						className={styles.actionbutton}
					>
						<IonIcon slot="start" size="small" src={dislikeIcon} />
						<IonLabel>{dislikes}</IonLabel>
					</IonButton>
					<IonButton
						color="dark"
						fill="clear"
						size="small"
						className={styles.actionbutton}
					>
						<IonIcon slot="start" size="small" src={commentIcon} />
						<IonLabel>{comments}</IonLabel>
					</IonButton>
					<IonButton
						color="dark"
						fill="clear"
						size="small"
						className={styles.actionbutton}
					>
						<IonIcon
							slot="icon-only"
							size="small"
							src={messageIcon}
						/>
					</IonButton>
					<IonButton
						color="dark"
						fill="clear"
						size="small"
						className={styles.actionbutton}
					>
						<IonIcon
							slot="icon-only"
							size="small"
							src={uploadIcon}
						/>
					</IonButton>
				</div>
			</div>
		</div>
	);
};
