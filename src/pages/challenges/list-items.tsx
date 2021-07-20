import React, { FC } from "react";

import { StoreItem } from "utils";
import { Section } from "components";

import logo from "icons/logo.svg";

import { StreamItem } from "../shared/stream-item";

type ListItemsProps = {
	storeItems: StoreItem[];
};

export const ListItems: FC<ListItemsProps> = ({ storeItems }) => (
	<Section>
		{storeItems.map((storeItem, index) => (
			<StreamItem
				key={storeItem.id}
				customAvatar={logo}
				actions={["Edit", storeItem.isPublished ? "Stop" : "Publish"]}
				{...storeItem}
			/>
		))}
	</Section>
);
