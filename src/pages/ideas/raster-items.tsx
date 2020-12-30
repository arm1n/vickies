import React, { FC } from "react";

import { StoreItem } from "utils";
import { Section, Text } from "components";

import logo from "icons/logo.svg";

import styles from "./raster-items.module.css";

type RasterItemsProps = {
	storeItems: StoreItem[];
};

export const RasterItems: FC<RasterItemsProps> = ({ storeItems }) => (
	<Section>
		<div className={styles.wrapper}>
			{storeItems.map((storeItem, index) => (
				<div key={storeItem.id} className={styles.item}>
					<div className={styles.number}>
						<Text type="special" size="lg">{index + 1}.</Text>
					</div>
					<div className={styles.image}>
						<img
							src={storeItem.images[0] || logo}
							alt=""
							className={styles.img}
						/>
					</div>
					<div className={styles.name}>
						<Text bold={true}>{storeItem.title}</Text>
					</div>
				</div>
			))}
		</div>
	</Section>
);
