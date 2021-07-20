import React, { FC } from "react";

import { Section, Text } from "components";
import { StoreItem, Idea, Comment } from "utils";

import { IdeaItem } from "./idea-item";

type IdeasProps = {
	storeItem: StoreItem;
	onClickButton?: (event: MouseEvent) => void;
	onAddNewComment?: (idea: Idea, comment: Comment) => void;
};

export const Ideas: FC<IdeasProps> = ({
	storeItem,
	onClickButton = () => {},
	onAddNewComment = () => {},
}) => (
	<Section>
		{storeItem.ideas.length > 0 ? (
			storeItem.ideas.map((idea, index) => (
				<IdeaItem
					{...idea}
					key={index}
					onAddNewComment={onAddNewComment}
				/>
			))
		) : (
			<Text>No ideas yet - be the first one!</Text>
		)}
	</Section>
);
