import React, { FC, useState, useCallback } from "react";
import { IonSegment, IonSegmentButton, IonIcon } from "@ionic/react";

import { IDEAS } from "data";
import { Section } from "components";
import { KEY_ITEM, getItem, StoreItem } from "utils";

import rasterIcon from "icons/raster.svg";
import clipboardIcon from "icons/clipboard.svg";

import { ListItems } from "./list-items";
import { RasterItems } from "./raster-items";

import styles from "./my-stream.module.css";

enum SEGMENT {
	LIST = "list",
	RASTER = "raster",
}

export const MyStream: FC = () => {
	const [activeSegment, setActiveSegment] = useState<SEGMENT>(SEGMENT.LIST);
	const changeHandler = useCallback(({ detail: { value } }) => {
		setActiveSegment(value);
	}, []);

	const storeItem = getItem<StoreItem>(KEY_ITEM);
	const storeItems =
		storeItem !== null ? [...[storeItem], ...IDEAS] : [...IDEAS];

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
							value="list"
						>
							<IonIcon
								color="main"
								size="large"
								src={clipboardIcon}
							/>
						</IonSegmentButton>
						<IonSegmentButton
							className={styles.ionsegmentbutton}
							value="raster"
						>
							<IonIcon
								color="main"
								size="large"
								src={rasterIcon}
							/>
						</IonSegmentButton>
					</IonSegment>
				</div>
			</Section>
			<Section>
				{activeSegment === SEGMENT.LIST && (
					<ListItems storeItems={storeItems} />
				)}
				{activeSegment === SEGMENT.RASTER && (
					<RasterItems storeItems={storeItems} />
				)}
			</Section>
		</div>
	);
};
