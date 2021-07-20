import React, { FC, Fragment, useState, useMemo, useCallback } from "react";
import {
	IonAvatar,
	IonButton,
	IonIcon,
	IonSlides,
	IonSlide,
} from "@ionic/react";
import { ellipsisHorizontal } from "ionicons/icons";

import { Idea, Comment } from "utils";
import { Text, Title } from "components";

import { ActionButtonsIdea } from "./idea/action-buttons-idea";
import { NewComment } from "./idea/new-comment";
import { Comments } from "./idea/comments";

import styles from "./idea-item.module.css";

type IdeaItemProps = Idea & {
	showText?: boolean;
	showActions?: boolean;
	customAvatar?: string;
	actions?: string[];
	onAddNewComment?: (idea: Idea, comment: Comment) => void;
};

export const IdeaItem: FC<IdeaItemProps> = (idea) => {
	const {
		avatar,
		user,
		title,
		text,
		image,
		showText = false,
		customAvatar = null,
		onAddNewComment = () => {},
	} = idea;

	const [showComments, setShowComments] = useState(false);

	const sliderOptions = useMemo(
		() => ({
			observer: true,
			observeParents: true,
			pagination: {
				type: "bullets",
				bulletClass: styles.pageritem,
				bulletActiveClass: styles.pageritemactive,
			},
		}),
		[]
	);

	const avatarUrl = useMemo(() => (customAvatar ? customAvatar : avatar), [
		customAvatar,
		avatar,
	]);

	const showCommentsHandler = useCallback((event) => {
		setShowComments(true);
	}, []);
	
	const hideCommentsHandler = useCallback((event) => {
		setShowComments(false);
	}, []);

	return (
		<div className={styles.wrapper}>
			<div className={styles.profile}>
				<IonAvatar className={styles.avatar}>
					<img
						src={avatarUrl}
						alt={user}
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
									by {user}
								</span>
							</Text>
						</div>
					</div>
					<div className={styles.trigger}>
						<IonButton color="medium" fill="clear" size="small">
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
					>
						{text}
					</Text>
				</div>

				{image && (
					<div className={styles.images}>
						<IonSlides
							pager={false}
							options={sliderOptions}
							className={styles.slider}
						>
							<IonSlide className={styles.slide}>
								<img
									className={styles.image}
									src={image}
									alt=""
								/>
							</IonSlide>
						</IonSlides>
					</div>
				)}

				<ActionButtonsIdea idea={idea} />

				<hr />

				{showComments ? (
					<Fragment>
						<Comments idea={idea} />
						<NewComment idea={idea} onSubmit={onAddNewComment} />
						<hr />
						<IonButton
							color="main"
							fill="clear"
							size="small"
							expand="block"
							onClick={hideCommentsHandler}
						>
							Hide comments
						</IonButton>
					</Fragment>
				) : (
					<IonButton
						color="main"
						fill="clear"
						size="small"
						expand="block"
						onClick={showCommentsHandler}
					>
						Show comments
					</IonButton>
				)}
			</div>
		</div>
	);
};
