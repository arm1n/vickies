import React, { FC, useCallback, useState } from "react";
import { IonInput, IonButton } from "@ionic/react";

import { Container } from "components";

import styles from "./form.module.css";

export const Form: FC = () => {
	const [text, setText] = useState<string>("");

	const changeHandler = useCallback((event) => {
		setText(event.detail.value);
	}, []);

	return (
		<div className={styles.wrapper}>
			<Container>
				<div className={styles.input}>
					<IonInput
						value={text}
						autofocus={true}
						onIonChange={changeHandler}
						placeholder="Enter your search term"
					/>
				</div>

				<IonButton
					color="main"
					fill="clear"
					size="small"
					disabled={!text}
				>
					Search
				</IonButton>
			</Container>
		</div>
	);
};
