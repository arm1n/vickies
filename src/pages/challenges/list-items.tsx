import React, { FC } from "react";
import { useHistory } from "react-router-dom";

import { StoreItem, KEY_ITEM } from "utils";
import { Section } from "components";

import logo from "icons/logo.svg";

import { StreamItem } from "../shared/stream-item";

type ListItemsProps = {
	storeItems: StoreItem[];
};

export const ListItems: FC<ListItemsProps> = ({ storeItems }) => {
	const history = useHistory();

	return (
		<Section>
			{storeItems.map((storeItem, index) => (
				<StreamItem
					key={storeItem.id}
					customAvatar={logo}
					onClickedAction={(action) => {
						switch (action) {
							case "Edit":
								if (storeItem.id === KEY_ITEM) {
									history.push(`/edit/${storeItem.id}`);
								}

								break;
							default:
						}
					}}
					actions={[
						"Edit",
						storeItem.isPublished ? "Stop" : "Publish",
					]}
					{...storeItem}
				/>
			))}
		</Section>
	);
};
