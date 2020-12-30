import React, { FC } from "react";
import { IonAvatar } from "@ionic/react";

import { Container, Text } from "components";

import profile_hansjoerg_rogen from "images/profiles/profile-hansjoerg-rogen.jpg";

import styles from "./my-profile.module.css";

export const MyProfile: FC = () => {
	return (
		<div className={styles.wrapper}>
			<Container>
				<div className={styles.container}>
					<div className={styles.image}>
						<IonAvatar className={styles.avatar}>
							<img
								src={profile_hansjoerg_rogen}
								alt="Hansjörg Rogen"
								className={styles.img}
							/>
						</IonAvatar>
					</div>
					<div className={styles.content}>
						<div className={styles.line}>
							<Text bold={true}>Hansjörg Rogen</Text>
						</div>
						<div className={styles.line}>
							<Text size="sm" bold={true}>
								founder of vickies
							</Text>
						</div>
						<div className={styles.line}>
							<Text size="sm">member since january 2020</Text>
						</div>
						<div className={styles.line}>
							<Text size="sm" bold={true}>
								16
							</Text>{" "}
							<Text size="sm">ideas</Text> &bull;{" "}
							<Text size="sm" bold={true}>
								320
							</Text>{" "}
							<Text size="sm">follower</Text> &bull;{" "}
							<Text size="sm" bold={true}>
								43
							</Text>{" "}
							<Text size="sm">following</Text>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};
