import React, { FC } from "react";
import { Link } from "react-router-dom";

import { Text } from "components";
import { Idea, KEY_IDEA, getItem } from "utils";

import styles from "./my-ideas.module.css";

const TRUNCATE = 18;

export const MyIdeas: FC = () => {
	const idea = getItem<Idea>(KEY_IDEA);

	return (
		<div className={styles.wrapper}>
			{idea && (
				<Link to="/edit/my-idea" className={styles.item}>
					<Text color="dark" type="special" size="sm" truncate={TRUNCATE}>
						{idea.title}
					</Text>
				</Link>
			)}
			<div className={styles.item}>
				<Text type="special" size="sm" truncate={TRUNCATE}>
					Nutella Ice Cream
				</Text>
			</div>
			<div className={styles.item}>
				<Text type="special" size="sm" truncate={TRUNCATE}>
					iBeacon for queen bee
				</Text>
			</div>
			<div className={styles.item}>
				<Text type="special" size="sm" truncate={TRUNCATE}>
					Journal budget
				</Text>
			</div>
			{!idea && (
				<div className={styles.item}>
					<Text type="special" size="sm" truncate={TRUNCATE}>
						seamless parking for clients
					</Text>
				</div>
			)}
		</div>
	);
};
