import React, { FC } from "react";
import { Link } from "react-router-dom";

import { Text } from "components";
import { StoreItem, KEY_ITEM, getItem } from "utils";

import styles from "./my-ideas.module.css";

const TRUNCATE = 18;

export const MyIdeas: FC = () => {
	const storeItem = getItem<StoreItem>(KEY_ITEM);

	return (
		<div className={styles.wrapper}>
			{storeItem && (
				<Link to={`edit/${KEY_ITEM}`} className={styles.item}>
					<Text color="dark" type="special" size="sm" truncate={TRUNCATE}>
						{storeItem.title}
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
			{!storeItem && (
				<div className={styles.item}>
					<Text type="special" size="sm" truncate={TRUNCATE}>
						seamless parking for clients
					</Text>
				</div>
			)}
		</div>
	);
};
