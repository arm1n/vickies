import React, { FC, Fragment, useState, useCallback, useMemo } from "react";
import { IonLabel, IonBadge, IonSegment, IonSegmentButton } from "@ionic/react";

import { Idea, KEY_IDEA, getItem, calculateRemainingTime } from "utils";
import { Section, Text } from "components";

import profile_hansjoerg_rogen from "images/profiles/profile-hansjoerg-rogen.jpg";

import { StreamItem } from "./stream-item";
import { PublicStream } from "./public-stream";
import { CompanyStream } from "./company-stream";

import styles from "./my-stream.module.css";

enum SEGMENT {
	PUBLIC = "public",
	COMPANY = "company",
}

export const MyStream: FC = () => {
	const [activeSegment, setActiveSegment] = useState<SEGMENT>(SEGMENT.PUBLIC);
	const [showBadge, setShowBadge] = useState(true);

	const changeHandler = useCallback(({ detail: { value } }) => {
		if (value === SEGMENT.COMPANY) {
			setShowBadge(false);
		}

		setActiveSegment(value);
	}, []);

	const idea = getItem<Idea>(KEY_IDEA);

	const item = useMemo(() => {
		if (idea === null) {
			return null;
		}

		const {
			title,
			text,
			images = [],
			tags = [],
			deadline = "",
			isPublished = false,
			isAnonymous = false,
		} = idea;

		if (!isPublished) {
			return false;
		}

		const user = isAnonymous ? "Anonymous" : "Hansjörg Rogen";
		const avatar = isAnonymous
			? "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"
			: profile_hansjoerg_rogen;
		const remainingTime = calculateRemainingTime(deadline);
		if (remainingTime === false) {
			return null;
		}

		const { days, hours, minutes } = remainingTime;
		const time = [
			days ? `${days}d` : "",
			hours ? `${hours}h` : "",
			minutes ? `${minutes}m` : "",
		].join(" ");

		return (
			<Fragment>
				<StreamItem
					user={user}
					avatar={avatar}
					time={time}
					title={title}
					likes={0}
					dislikes={0}
					comments={0}
					text={text}
					tags={tags}
					images={images}
				/>
				<hr />
			</Fragment>
		);
	}, [idea]);

	const publicStreamItem = useMemo(() => {
		if (idea === null || idea === null) {
			return null;
		}

		switch (idea.sharingValue) {
			case "world":
			case "followers":
				return item;
			default:
				return null;
		}
	}, [idea, item]);

	const companyStreamItem = useMemo(() => {
		if (item === null || idea === null) {
			return null;
		}

		switch (idea.sharingValue) {
			case "company":
			case "department":
			case "team":
				return item;
			default:
				return null;
		}
	}, [idea, item]);

	return (
		<div className={styles.wrapper}>
			<Section>
				<div className={styles.segments}>
					<IonSegment
						mode="md"
						color="main"
						value={activeSegment}
						onIonChange={changeHandler}
					>
						<IonSegmentButton
							className={styles.ionsegmentbutton}
							value="public"
						>
							<IonLabel>
								<Text type="special" size="xl">
									public
								</Text>
							</IonLabel>
						</IonSegmentButton>
						<IonSegmentButton
							className={styles.ionsegmentbutton}
							value="company"
						>
							<IonLabel>
								<Text type="special" size="xl">
									company
								</Text>
							</IonLabel>
							{showBadge && (
								<IonBadge color="main" className={styles.badge}>
									1
								</IonBadge>
							)}
						</IonSegmentButton>
					</IonSegment>
				</div>
			</Section>
			<Section>
				{activeSegment === SEGMENT.PUBLIC && (
					<PublicStream>{publicStreamItem}</PublicStream>
				)}
				{activeSegment === SEGMENT.COMPANY && (
					<CompanyStream>{companyStreamItem}</CompanyStream>
				)}
			</Section>
		</div>
	);
};
