import React, { FC, useState, useCallback } from "react";
import {
	IonAvatar,
	IonInput,
	IonTextarea,
	IonButton,
	IonIcon,
} from "@ionic/react";

import profile_hansjoerg_rogen from "images/profiles/profile-hansjoerg-rogen.jpg";

import { Title, Text } from "components";

import styles from "./form.module.css";

type HeaderProps = {
	title: string | null;
	text: string | null;
	image: string | null;
	onChangeTitle: (title: string | null) => void;
	onChangeText: (text: string | null) => void;
	onChangeImage: (image: string | null) => void;
};

export const Header: FC<HeaderProps> = ({
	title,
	text,
	image,
	onChangeTitle,
	onChangeText,
	onChangeImage,
}) => {
	return (
		<div className={styles.wrapper}>
			
		</div>
	);
};
