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
	title: string;
	text: string;
	images?: string[];
	tags?: string[];
	onChangeTitle: (title: string) => void;
	onChangeText: (text: string) => void;
	onChangeImages: (images: string[]) => void;
};

export const Form: FC<FormProps> = ({
	title,
	text,
	images = [],
	tags = [],
	onChangeTitle,
	onChangeText,
	onChangeImages,
}) => {
	const [showImageAlert, setShowImageAlert] = useState(false);
	const textareaRef = useRef<HTMLIonTextareaElement>(null);
	const handleTitle = useCallback(
		(event) => {
			onChangeTitle(event.detail.value);
		},
		[onChangeTitle]
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

				onChangeImages([reader.result]);
			};
		},
		[onChangeImages]
	);

	const handleClickImage = useCallback(() => {
		setShowImageAlert(true);
	}, []);

	const handleRemoveImage = useCallback(() => {
		onChangeImages([]);
	}, [onChangeImages]);

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
			const inputHandler = () => {
				textarea.style.height = "auto";
				textarea.style.height = `${textarea.scrollHeight}px`;
			};

			const changeHandler = (event: Event) => {
				const element = event.target as HTMLTextAreaElement;
				onChangeText(element.value);
			};

			textarea.addEventListener("input", inputHandler);
			textarea.addEventListener("change", changeHandler);

			teardowns.push(() => {
				textarea.removeEventListener("input", changeHandler);
			});
			teardowns.push(() => {
				textarea.removeEventListener("input", inputHandler);
			});

			setTimeout(inputHandler, 0);
		};

		getInputElement();

		return () => {
			teardowns.forEach((teardown) => teardown());
		};
	}, [onChangeText]);

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
							placeholder="Title of your vickie"
						/>
					</div>
					<div className={styles.text}>
						<IonTextarea
							value={text}
							ref={textareaRef}
							placeholder="Write down your idea"
						/>
					</div>

					{tags.length > 0 && (
						<div className={styles.tags}>
							{tags.map((tag, index) => (
								<span key={index} className={styles.tag}>
									<Text color="main">#{tag}</Text>
								</span>
							))}
						</div>
					)}

					{images.length > 0 && (
						<button
							className={styles.image}
							onClick={handleClickImage}
						>
							<img
								src={images[0]}
								alt=""
								className={styles.img}
							/>
							<Text color="medium" size="xs">
								Click to remove
							</Text>
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
