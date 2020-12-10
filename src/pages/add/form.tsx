import React, { FC, useCallback, useState, useEffect, useRef } from "react";
import {
	IonAvatar,
	IonInput,
	IonTextarea,
	IonButton,
	IonIcon,
	IonAlert,
} from "@ionic/react";

import profile_hansjoerg_rogen from "images/profiles/profile-hansjoerg-rogen.jpg";

import photoIcon from "icons/photo.svg";
import movieIcon from "icons/movie.svg";
import audioIcon from "icons/audio.svg";
import copyIcon from "icons/copy.svg";

import { Text } from "components";

import styles from "./form.module.css";

type FormProps = {
	isNew?: boolean;
	title: string | null;
	text: string | null;
	image: string | null;
	onChangeTitle: (title: string | null) => void;
	onChangeText: (text: string | null) => void;
	onChangeImage: (image: string | null) => void;
};

export const Form: FC<FormProps> = ({
	title,
	text,
	image,
	onChangeTitle,
	onChangeText,
	onChangeImage,
	isNew = true,
}) => {
	const [showImageAlert, setShowImageAlert] = useState(false);
	const [showTextArea, setShowTextArea] = useState(isNew);
	const textareaRef = useRef<HTMLIonTextareaElement>(null);
	const handleTitle = useCallback(
		(event) => {
			onChangeTitle(event.detail.value);
		},
		[onChangeTitle]
	);

	const handleText = useCallback(
		(event) => {
			onChangeText(event.detail.value);
		},
		[onChangeText]
	);

	const handleAddImage = useCallback(
		(event) => {
			const file = event.target.files[0];
			if (typeof file === "undefined") {
				return;
			}

			const reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onload = () => {
				if (typeof reader.result !== "string") {
					return;
				}

				onChangeImage(reader.result);
			};
		},
		[onChangeImage]
	);

	const handleClickImage = useCallback(() => {
		setShowImageAlert(true);
	}, []);

	const handleRemoveImage = useCallback(() => {
		onChangeImage(null);
	}, [onChangeImage]);

	const handleDidDismissImageAlert = useCallback(() => {
		setShowImageAlert(false);
	}, []);

	useEffect(() => {
		const teardowns: Function[] = [];
		const getInputElement = async () => {
			const { current: ionTextarea } = textareaRef;
			if (ionTextarea === null) {
				return;
			}

			const textarea = await ionTextarea.getInputElement();
			const resizeHandler = () => {
				textarea.style.height = "auto";
				textarea.style.height = `${textarea.scrollHeight}px`;
			};

			textarea.addEventListener("input", resizeHandler);
			teardowns.push(() => {
				textarea.removeEventListener("input", resizeHandler);
			});

			setTimeout(resizeHandler, 0);
		};

		getInputElement();

		return () => {
			teardowns.forEach((teardown) => teardown());
		};
	}, [showTextArea]);

	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<div className={styles.profile}>
					<IonAvatar className={styles.avatar}>
						<img
							src={profile_hansjoerg_rogen}
							alt="Hansjörg Rogen"
							className={styles.avatarimg}
						/>
					</IonAvatar>
				</div>
				<div className={styles.content}>
					<div className={styles.title}>
						<IonInput
							value={title}
							autofocus={true}
							onIonChange={handleTitle}
							placeholder="Title of my vickie?"
						/>
					</div>
					<div className={styles.text}>
						{showTextArea ? (
							<IonTextarea
								value={text}
								ref={textareaRef}
								onIonChange={handleText}
								placeholder="Write down your idea"
							/>
						) : (
							<div className={styles.expandable}>
								<Text
									size="md"
									truncate={125}
									expandable={true}
									onToggleMore={setShowTextArea}
								>
									{text}
								</Text>
							</div>
						)}
					</div>

					{image && (
						<button
							className={styles.image}
							onClick={handleClickImage}
						>
							<img src={image} alt="" />
						</button>
					)}
				</div>
			</div>
			<hr />

			<div className={styles.media}>
				<IonButton
					color="main"
					fill="clear"
					size="small"
					className={styles.mediabutton}
				>
					<IonIcon slot="icon-only" size="small" src={photoIcon} />
					<input
						type="file"
						accept="image/*"
						className={styles.file}
						onChange={handleAddImage}
					/>
				</IonButton>
				<IonButton
					color="main"
					fill="clear"
					size="small"
					className={styles.mediabutton}
				>
					<IonIcon slot="icon-only" size="small" src={movieIcon} />
				</IonButton>
				<IonButton
					color="main"
					fill="clear"
					size="small"
					className={styles.mediabutton}
				>
					<IonIcon slot="icon-only" size="small" src={audioIcon} />
				</IonButton>
				<IonButton
					color="main"
					fill="clear"
					size="small"
					className={styles.mediabutton}
				>
					<IonIcon slot="icon-only" size="small" src={copyIcon} />
				</IonButton>
			</div>
			<IonAlert
				isOpen={showImageAlert}
				header={"Media removal"}
				message={"Do you really want to remove this media?"}
				onDidDismiss={handleDidDismissImageAlert}
				buttons={[
					{
						text: "No",
					},
					{
						text: "Yes",
						handler: handleRemoveImage,
					},
				]}
			/>
		</div>
	);
};
