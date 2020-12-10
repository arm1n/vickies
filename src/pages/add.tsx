import React, { useState, useEffect, useCallback } from "react";
import { Redirect } from "react-router-dom";
import {
  IonTitle,
  IonContent,
  IonHeader,
  IonPage,
  IonButton,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonLoading,
} from "@ionic/react";

import { Container, Section, Text } from "components";
import { Idea, KEY_IDEA, setItem } from "utils";

import { Form } from "./add/form";

export const Add: React.FC = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [images, setImages] = useState<string[]>([]);
  const [showLoading, setShowLoading] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const handleDidDismiss = useCallback(() => {
    setIsSaved(true);
  }, []);

  const handleSave = useCallback(() => {
    const data = { title, text, images, isPublished: false };
    setItem<Idea>(KEY_IDEA, data);
    setShowLoading(true);
  }, [title, text, images]);

  useEffect(() => {
    const isTitleValid = title.length > 0;
    const isTextValid = text.length > 0;
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
          <IonTitle>
            <div className="ion-text-center">
              <Text color="main" size="md" bold={true}>
                create new vickie
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
        <Container>
          <Section>
            <Form
              title={title}
              text={text}
              images={images}
              onChangeTitle={setTitle}
              onChangeText={setText}
              onChangeImages={setImages}
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
