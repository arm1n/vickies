import React, { FC, Fragment } from "react";
import { Link } from "react-router-dom";

import { IDEAS } from "data";
import { Text } from "components";
import { StoreItem, KEY_ITEM, getItem } from "utils";

import styles from "./my-ideas.module.css";

const TRUNCATE = 18;

export const MyIdeas: FC = () => {
	const storeItem = getItem<StoreItem>(KEY_ITEM);
	const storeItems =
		storeItem !== null ? [...[storeItem], ...IDEAS] : [...IDEAS];

	return (
		<div className={styles.wrapper}>
			{storeItems.slice(0, 4).map((storeItem) => {
				const content = (
					<Text
						color="dark"
						type="special"
						size="sm"
						truncate={TRUNCATE}
					>
						{storeItem.title}
					</Text>
				);

				return (
					<div className={styles.item} key={storeItem.id}>
						{storeItem.id === KEY_ITEM ? (
							<Link to={`edit/${KEY_ITEM}`}>{content}</Link>
						) : (
							<Fragment>{content}</Fragment>
						)}
					</div>
				);
			})}
		</div>
	);
};
