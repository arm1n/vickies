import React, { useState, useEffect, useCallback } from "react";
import { Redirect } from "react-router-dom";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonButton,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonLoading,
} from "@ionic/react";

import { Container, Section } from "components";
import { KEY_IDEA, setItem } from "utils";

import { Form } from "./add/form";

// import styles from "./add.module.css";

export const Add: React.FC = () => {
  const [title, setTitle] = useState<string | null>(null);
  const [text, setText] = useState<string | null>(null);
  const [image, setImage] = useState<string | null>(null);
  const [showLoading, setShowLoading] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const handleDidDismiss = useCallback(() => {
    setIsSaved(true);
  }, []);

  const handleSave = useCallback(() => {
    const data = { title, text, image };
    setItem(KEY_IDEA, data);
    setShowLoading(true);
  }, [title, text, image]);

  useEffect(() => {
    const isTitleValid = typeof title === "string" && title.length > 0;
    const isTextValid = typeof text === "string" && text.length > 0;
    setIsValid(isTitleValid && isTextValid);
  }, [title, text]);

  if (isSaved) {
    return <Redirect to={`/edit/${KEY_IDEA}`} />;
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
              onClick={handleSave}
            >
              save
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {/*<IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Add</IonTitle>
          </IonToolbar>
        </IonHeader>*/}
        <Container>
          <Section>
            <Form
              title={title}
              text={text}
              image={image}
              onChangeTitle={setTitle}
              onChangeText={setText}
              onChangeImage={setImage}
            />
          </Section>
        </Container>
        <IonLoading
          isOpen={showLoading}
          onDidDismiss={handleDidDismiss}
          message={"Saving your idea..."}
          duration={3000}
        />
      </IonContent>
    </IonPage>
  );
};
