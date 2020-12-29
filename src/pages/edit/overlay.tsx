import React, { FC } from "react";
import { createPortal } from "react-dom";
import { IonIcon, IonButton } from "@ionic/react";

import { Text } from "components";
import { StoreItem } from "utils";

import clockIcon from "icons/clock.svg";

import { Countdown } from "./countdown";

import styles from "./overlay.module.css";

type OverlayProps = {
	storeItem: StoreItem;
	onClickEdit: () => void;
	onClickStop: () => void;
};

export const Overlay: FC<OverlayProps> = ({
	storeItem,
	onClickEdit,
	onClickStop,
}) =>
	createPortal(
		<div className={styles.wrapper}>
			<div className={styles.navbar}>
				<IonButton
					mode="ios"
					fill="solid"
					color="main"
					onClick={onClickEdit}
				>
					Edit
				</IonButton>
				<IonButton
					mode="ios"
					fill="solid"
					color="main"
					onClick={onClickStop}
				>
					Stop
				</IonButton>
			</div>
			<div className={styles.content}>
				<Text bold={true} color="light">
					<div className={styles.header}>
						<IonIcon icon={clockIcon} />
						<div className={styles.text}>Time left</div>
					</div>
				</Text>
				 <Countdown endDate={storeItem.deadline} color="inverse" />
			</div>
		</div>,
		document.body
	);
