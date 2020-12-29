import React, { FC } from "react";

import { STORE } from "data";
import { Section } from "components";

import { StreamItem } from "../shared/stream-item";

const PUBLIC_STORE_ITEMS = STORE.filter(({ sharingValue }) => {
	switch (sharingValue) {
		case "world":
		case "followers":
			return true;
		default:
			return false;
	}
});

const MAX_INDEX = PUBLIC_STORE_ITEMS.length - 1;

export const PublicStream: FC = ({ children }) => (
	<Section>
		{children}
		{PUBLIC_STORE_ITEMS.map((storeItem, index) => (
			<div key={storeItem.id}>
				<StreamItem {...storeItem} />
				{index < MAX_INDEX && <hr />}
			</div>
		))}
	</Section>
);
