import React, { FC, Fragment, useState, useCallback, useMemo } from "react";
import { IonLabel, IonBadge, IonSegment, IonSegmentButton } from "@ionic/react";

import { StoreItem, KEY_ITEM, getItem } from "utils";
import { Section, Text } from "components";

import { StreamItem } from "../shared/stream-item";

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

	const storeItem = getItem<StoreItem>(KEY_ITEM);

	const [publicItem, companyItem] = useMemo(() => {
		if (storeItem === null) {
			return [];
		}

		const item = (
			<Fragment>
				<StreamItem {...storeItem} />
				<hr />
			</Fragment>
		);

		switch (storeItem.sharingValue) {
			case "world":
			case "followers":
				return [item, null];
			default:
				return [null, item];
		}
	}, [storeItem]);

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
					<PublicStream>{publicItem}</PublicStream>
				)}
				{activeSegment === SEGMENT.COMPANY && (
					<CompanyStream>{companyItem}</CompanyStream>
				)}
			</Section>
		</div>
	);
};
