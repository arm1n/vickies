import React, { FC } from "react";

import { STORE } from "data";
import { StoreItem } from "utils";
import { Section } from "components";

import { StreamItem } from "../shared/stream-item";

const COMPANY_STORE_ITEMS = STORE.filter(({ isPublished, sharingValue }) => {
	if (!isPublished) {
		return false;
	}

	switch (sharingValue) {
		case "team":
		case "company":
		case "department":
			return true;
		default:
			return false;
	}
});

type CompanyStreamProps = {
	onClick: (storeItem: StoreItem) => void;
};

export const CompanyStream: FC<CompanyStreamProps> = ({
	children,
	onClick = () => {},
}) => (
	<Section>
		{children}
		{COMPANY_STORE_ITEMS.map((storeItem, index) => (
			<StreamItem key={storeItem.id} onClick={onClick} {...storeItem} />
		))}
	</Section>
);
