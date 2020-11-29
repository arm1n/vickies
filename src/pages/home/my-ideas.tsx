import React from "react";
import type { FC } from "react";

import { Text } from "components";

import styles from "./my-ideas.module.css";

export const MyIdeas: FC = () => (
	<div className={styles.wrapper}>
		<div className={styles.item}>
			<Text type="special" size="sm">
				Nutella Ice Cream
			</Text>
		</div>
		<div className={styles.item}>
			<Text type="special" size="sm">
				Something special
			</Text>
		</div>
		<div className={styles.item}>
			<Text type="special" size="sm">
				Super handy idea
			</Text>
		</div>
		<div className={styles.item}>
			<Text type="special" size="sm" truncate={15}>
				Too long to fit in this box
			</Text>
		</div>
	</div>
);
