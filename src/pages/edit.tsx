import React, { FC, useCallback, useEffect, useState } from "react";
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
  IonLoading,
} from "@ionic/react";

import {
  KEY_ITEM,
  getItem,
  setItem,
  removeItem,
  StoreItem,
  SharingValue,
} from "utils";
import { Container, Section, Text } from "components";

import { Form } from "./add/form";
import { Tags } from "./edit/tags";
import { Overlay } from "./edit/overlay";
import { Deadline } from "./edit/deadline";
import { Settings } from "./edit/settings";

// import styles from "./add.module.css";

export const Edit: FC = () => {
  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [images, setImages] = useState<string[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [reward, setReward] = useState<number>();
  const [deadline, setDeadline] = useState("");
  const [announcementDate, setAnnouncementDate] = useState("");
  const [isAnonymous, setIsAnoymous] = useState(false);
  const [sharingValue, setSharingValue] = useState<SharingValue>("world");
  const [isPublished, setIsPublished] = useState(false);

  const [showLoading, setShowLoading] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const [storeItem, setStoreItem] = useState(() => getItem<StoreItem>(id));

  const handleDidDismiss = useCallback(() => {
    setIsSaved(true);
  }, []);

  const handleOverlayClickEdit = useCallback(() => {
    setIsPublished(false);
  }, []);

  const handleOverlayClickStop = useCallback(() => {
    removeItem(KEY_ITEM);
    setStoreItem(null);
  }, []);

  const handleShare = useCallback(() => {
    const data = {
      ...storeItem!,
      ...{
        title,
        text,
        images,
        tags,
        reward: reward || 0,
        deadline,
        announcementDate,
        sharingValue,
        isAnonymous,

        ideas: [],
        isPublished: true,
        publishedDate: new Date().toISOString(),
      },
    };
    setItem<StoreItem>(KEY_ITEM, data);
    setShowLoading(true);
  }, [
    storeItem,
    title,
    text,
    images,
    tags,
    reward,
    deadline,
    announcementDate,
    sharingValue,
    isAnonymous,
  ]);

  useEffect(() => {
    const isTitleValid = title.length > 0;
    const isTextValid = text.length > 0;
    const isTagsValid = tags.length > 0;
    const isRewardValid = typeof reward === "number" && reward > 0;
    const isDeadlineValid = deadline.length > 0;
    const isAnnouncementDateValid = announcementDate.length > 0;

    setIsValid(
      !isPublished &&
        isTitleValid &&
        isTextValid &&
        isTagsValid &&
        isRewardValid &&
        isDeadlineValid &&
        isAnnouncementDateValid
    );
  }, [title, text, tags, reward, deadline, announcementDate, isPublished]);

  useEffect(() => {
    if (storeItem === null) {
      return;
    }

    const {
      title,
      text,
      images = [],
      tags = [],
      reward = undefined,
      deadline = "",
      announcementDate = "",
      isPublished = false,
      sharingValue = "world",
      isAnonymous = false,
    } = storeItem;
    setTitle(title);
    setText(text);
    setImages(images);
    setTags(tags);
    setReward(reward);
    setDeadline(deadline);
    setAnnouncementDate(announcementDate);
    setSharingValue(sharingValue);
    setIsAnoymous(isAnonymous);

    setIsPublished(isPublished);
  }, [storeItem]);

  if (storeItem === null) {
    return <Redirect to="/home" />;
  }

  if (isSaved) {
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
                edit your challenge
              </Text>
            </div>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <Section>
          <Container>
            <Form
              title={title}
              text={text}
              images={images}
              tags={tags}
              onChangeTitle={setTitle}
              onChangeText={setText}
              onChangeImages={setImages}
            />

            <hr />
            <Tags tags={tags} onChange={setTags} />
            <Deadline deadline={deadline} onChange={setDeadline} />
            <Settings
              deadline={deadline}
              reward={reward}
              announcementDate={announcementDate}
              sharingValue={sharingValue}
              isAnonymous={isAnonymous}
              onChangeReward={setReward}
              onChangeAnnouncementDate={setAnnouncementDate}
              onChangeSharingValue={setSharingValue}
              onChangeIsAnonymous={setIsAnoymous}

            />
          </Container>
        </Section>
        <IonLoading
          isOpen={showLoading}
          onDidDismiss={handleDidDismiss}
          message={"Sharing your challenge..."}
          duration={3000}
        />
        {isPublished && (
          <Overlay
            storeItem={storeItem}
            onClickEdit={handleOverlayClickEdit}
            onClickStop={handleOverlayClickStop}
          />
        )}
      </IonContent>
    </IonPage>
  );
};
