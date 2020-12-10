import React, { Fragment, FC, useMemo, useState, useCallback } from "react";
import {
	IonItem,
	IonIcon,
	IonLabel,
	IonInput,
	IonButton,
	IonChip,
} from "@ionic/react";
import { close } from "ionicons/icons";

import infoIcon from "icons/info.svg";
import addIcon from "icons/add.svg";

import styles from "./tags.module.css";

type TagsProps = {
	tags: string[];
	onChange: (tags: string[]) => void;
};

export const Tags: FC<TagsProps> = ({ tags, onChange }) => {
	const [newTag, setNewTag] = useState("");

	const changeHandler = useCallback((event) => {
		setNewTag(event.detail.value);
	}, []);

	const addHandler = useCallback(
		(event) => {
			if (newTag.length === 0) {
				return;
			}

			setNewTag("");
			onChange([...tags, ...[newTag]]);
		},
		[tags, newTag, onChange]
	);

	const removeHandler = useCallback(
		(tag) => {
			onChange(tags.filter((current) => current !== tag));
		},
		[tags, onChange]
	);

	const isValidTag = useMemo(
		() => newTag.length > 0 && tags.indexOf(newTag) < 0,
		[newTag, tags]
	);

	return (
		<Fragment>
			<IonItem lines="full" className={styles.ionitem}>
				<IonIcon icon={infoIcon} slot="start" />
				<IonLabel># Tags</IonLabel>
				<IonInput
					slot="end"
					value={newTag}
					placeholder="Add tag"
					onIonChange={changeHandler}
				/>
				<IonButton
					disabled={!isValidTag}
					onClick={addHandler}
					fill="clear"
					color="main"
					slot="end"
				>
					<IonIcon size="small" slot="icon-only" icon={addIcon} />
				</IonButton>
			</IonItem>
			{tags.length > 0 && (
				<div className={styles.chips}>
					{tags.map((tag, index) => (
						<IonChip
							key={index}
							color="main"
							outline={true}
							onClick={() => removeHandler(tag)}
						>
							<IonLabel>#{tag}</IonLabel>
							<IonIcon icon={close} />
						</IonChip>
					))}
				</div>
			)}
		</Fragment>
	);
};
