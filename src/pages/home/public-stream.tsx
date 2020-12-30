import React, { FC } from "react";

import { STORE } from "data";
import { StoreItem } from "utils";
import { Section } from "components";

import { StreamItem } from "../shared/stream-item";

const PUBLIC_STORE_ITEMS = STORE.filter(({ isPublished, sharingValue }) => {
	if (!isPublished) {
		return false;
	}

	switch (sharingValue) {
		case "world":
		case "followers":
			return true;
		default:
			return false;
	}
});

type PublicStreamProps = {
	onClick: (storeItem: StoreItem) => void;
};

export const PublicStream: FC<PublicStreamProps> = ({
	children,
	onClick = () => {},
}) => (
	<Section>
		{children}
		{PUBLIC_STORE_ITEMS.map((storeItem, index) => (
			<StreamItem key={storeItem.id} onClick={onClick} {...storeItem} />
		))}
	</Section>
);
