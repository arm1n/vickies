import React, { FC } from "react";

import { STORE } from "data";
import { Section } from "components";

import { StreamItem } from "../shared/stream-item";

const COMPANY_STORE_ITEMS = STORE.filter(({ sharingValue }) => {
	switch (sharingValue) {
		case "team":
		case "company":
		case "department":
			return true;
		default:
			return false;
	}
});

const MAX_INDEX = COMPANY_STORE_ITEMS.length - 1;

export const CompanyStream: FC = ({ children }) => (
	<Section>
		{children}
		{COMPANY_STORE_ITEMS.map((storeItem, index) => (
			<div key={storeItem.id}>
				<StreamItem key={storeItem.id} {...storeItem} />
				{index < MAX_INDEX && <hr />}
			</div>
		))}
	</Section>
);
