import React, { FC, Fragment, useMemo } from "react";
import { IonItem, IonLabel } from "@ionic/react";

import { StoreItem } from "utils";
import { Text } from "components";
import { TimeDifference } from "../shared/time-difference";

type MetaProps = {
	storeItem: StoreItem;
};

export const Meta: FC<MetaProps> = ({ storeItem }) => {
	const publishedDate = useMemo(
		() => new Date(storeItem.publishedDate).toLocaleString(),
		[storeItem.publishedDate]
	);

	return (
		<Fragment>
			<IonItem lines="full">
				<IonLabel>
					<Text>public since {publishedDate}</Text>
				</IonLabel>
			</IonItem>
			<IonItem lines="full">
				<IonLabel>
					<Text color="main" bold={true}>
						<TimeDifference date={storeItem.deadline} />
					</Text>{" "}
					<Text>until deadline</Text>
				</IonLabel>
			</IonItem>
			<IonItem lines="none">
				<IonLabel>
					<Text bold={true}>{storeItem.likes}</Text>{" "}
					<Text>likes</Text> &bull;{" "}
					<Text bold={true}>{storeItem.dislikes}</Text>{" "}
					<Text>dislikes</Text>
				</IonLabel>
			</IonItem>
		</Fragment>
	);
};
