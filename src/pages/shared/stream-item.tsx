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

import { StoreItem } from "utils";
import { Text, Title } from "components";

import { ActionButtonsChallengeDefault } from "./action-buttons-challenge-default";
import { TimeDifference } from "./time-difference";

import styles from "./stream-item.module.css";

type StreamItemProps = StoreItem & {
	showText?: boolean;
	showActions?: boolean;
	customAvatar?: string;
	actions?: string[];
	onClick?: (storeItem: StoreItem) => void;
};

export const StreamItem: FC<StreamItemProps> = (storeItem) => {
	const {
		// id,
		avatar,
		user,
		title,
		deadline,
		text,
		tags = [],
		images = [],
		isPublished,
		isAnonymous,
		showText = false,
		showActions = true,
		customAvatar = null,
		actions = ["Report", "Hide"],
		onClick = () => {},
	} = storeItem;

	const [showTags, setShowTags] = useState(() => text.length < 125);
	const [popoverEvent, setPopoverEvent] = useState<MouseEvent | undefined>(
		undefined
	);
	const [pagerElement, setPagerElement] = useState<HTMLElement | null>(null);

	const showPopover = useMemo(() => !!popoverEvent, [popoverEvent]);
	const sliderOptions = useMemo(
		() => ({
			observer: true,
			observeParents: true,
			pagination: {
				type: "bullets",
				el: pagerElement,
				bulletClass: styles.pageritem,
				bulletActiveClass: styles.pageritemactive,
			},
		}),
		[pagerElement]
	);

	const userName = useMemo(() => (isAnonymous ? "Anonymous" : user), [
		isAnonymous,
		user,
	]);
	const avatarUrl = useMemo(
		() =>
			customAvatar
				? customAvatar
				: isAnonymous
				? "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"
				: avatar,
		[customAvatar, isAnonymous, avatar]
	);

	const clickHandler = useCallback(
		(event) => {
			onClick(storeItem);
		},
		[onClick, storeItem]
	);

	const showPopoverHandler = useCallback((event) => {
		event.persist();
		event.stopPropagation();
		setPopoverEvent(event.nativeEvent);
	}, []);

	const hidePopoverHandler = useCallback((event) => {
		event.stopPropagation();
		setPopoverEvent(undefined);
	}, []);

	const toggleMoreHandler = useCallback((state, event) => {
		event.stopPropagation();
		setShowTags(true);
	}, []);

	const dummyHandler = useCallback((event) => {
		event.stopPropagation();
	}, []);

	return (
		<div className={styles.wrapper} onClick={clickHandler}>
			<div className={styles.profile}>
				<IonAvatar className={styles.avatar}>
					<img
						src={avatarUrl}
						alt={userName}
						className={styles.avatarimg}
					/>
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
									by {userName}
								</span>
								{isPublished && (
									<span className={styles.postedat}>
										{" "}
										<Text
											size="sm"
											bold={true}
											color="main"
										>
											- <TimeDifference date={deadline} />
										</Text>
									</span>
								)}
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
									<IonLabel>Actions</IonLabel>
								</IonListHeader>
								{actions.map((action, index) => (
									<IonItem
										key={index}
										lines={
											index < actions.length - 1
												? "inset"
												: "none"
										}
										button={true}
										onClick={dummyHandler}
									>
										{action}
									</IonItem>
								))}
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
						expandable={!showText}
						truncate={showText ? 0 : 125}
						onToggleMore={toggleMoreHandler}
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
						{images.length > 1 && (
							<div
								ref={setPagerElement}
								className={styles.pager}
							/>
						)}
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
										alt=""
									/>
								</IonSlide>
							))}
						</IonSlides>
					</div>
				)}

				{showActions && (
					<ActionButtonsChallengeDefault
						storeItem={storeItem}
						onClickButton={dummyHandler}
					/>
				)}
			</div>
		</div>
	);
};
