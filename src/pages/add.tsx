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

import { StoreItem, KEY_ITEM, setItem } from "utils";
import { Container, Section, Text } from "components";

import profile_hansjoerg_rogen from "images/profiles/profile-hansjoerg-rogen.jpg";

import { Form } from "./add/form";

import styles from "./add.module.css";

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
    const data = {
      id: KEY_ITEM,
      user: "Hansjörg Rogen",
      avatar: profile_hansjoerg_rogen,

      title,
      text,
      images,
      tags: [],
      deadline: "",
      sharingValue: "world" as const,
      isAnonymous: false,
      isPublished: false,
      publishedDate: "",
      commentItems: [],
    };
    setItem<StoreItem>(KEY_ITEM, data);
    setShowLoading(true);
  }, [title, text, images]);

  useEffect(() => {
    const isTitleValid = title.length > 0;
    const isTextValid = text.length > 0;
    setIsValid(isTitleValid && isTextValid);
  }, [title, text]);

  if (isSaved) {
    return <Redirect to={`/edit/${KEY_ITEM}`} />;
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <div className={styles.hidden}>
              <IonBackButton color="main" text={""} defaultHref="/home" />
            </div>
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
