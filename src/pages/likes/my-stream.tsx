import React, { FC } from "react";

import { LIKES } from "data";
import { Section } from "components";

import { StreamItem } from "../shared/stream-item";

export const MyStream: FC = () => (
	<Section>
		{LIKES.map((storeItem, index) => (
			<StreamItem
				key={storeItem.id}
				actions={["Unlike", "Report"]}
				{...storeItem}
			/>
		))}
	</Section>
);
