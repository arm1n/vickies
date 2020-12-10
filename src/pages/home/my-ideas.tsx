import React, { FC } from "react";

import { Text } from "components";

import styles from "./my-ideas.module.css";

const TRUNCATE = 18;

export const MyIdeas: FC = () => (
	<div className={styles.wrapper}>
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
		<div className={styles.item}>
			<Text type="special" size="sm" truncate={TRUNCATE}>
				seamless parking for clients
			</Text>
		</div>
	</div>
);
