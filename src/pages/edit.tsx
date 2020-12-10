import React, { FC, useMemo, useCallback, useEffect, useState } from "react";
import { Redirect, useParams } from "react-router-dom";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonButton,
} from "@ionic/react";

import { getItem } from "utils";
import { Container, Section, Text } from "components";

import { Form } from "./add/form";

// import styles from "./add.module.css";

export const Edit: FC = () => {
  const { key } = useParams();

  const [title, setTitle] = useState<string | null>(null);
  const [text, setText] = useState<string | null>(null);
  const [image, setImage] = useState<string | null>(null);
  const [isValid, setIsValid] = useState(false);

  const item = useMemo(() => getItem(key), [key]);

  const handleShare = useCallback(() => {}, []);

  useEffect(() => {
    const isTitleValid = typeof title === "string" && title.length > 0;
    const isTextValid = typeof text === "string" && text.length > 0;
    setIsValid(isTitleValid && isTextValid);
  }, [title, text]);

  useEffect(() => {
    setTitle(item.title);
    setText(item.text);
    setImage(item.image);
  }, [item]);

  if (item === null) {
    return <Redirect to="/home" />;
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton color="main" text={""} defaultHref="/home" />
          </IonButtons>
          <IonButtons slot="end">
            <IonButton
              disabled={!isValid}
              fill="solid"
              color="main"
              strong={true}
              onClick={handleShare}
            >
              share
            </IonButton>
          </IonButtons>
          <IonTitle>
            <div className="ion-text-center">
              <Text color="main" size="md" bold={true}>
                my vickie
              </Text>
            </div>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {/*<IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Add</IonTitle>
          </IonToolbar>
        </IonHeader>*/}

        <Section>
          <Container>
            <Form
              isNew={false}
              title={title}
              text={text}
              image={image}
              onChangeTitle={setTitle}
              onChangeText={setText}
              onChangeImage={setImage}
            />
          </Container>
        </Section>
      </IonContent>
    </IonPage>
  );
};
