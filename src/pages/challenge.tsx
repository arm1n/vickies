import React, { useCallback, useState } from "react";
import { Redirect, useParams } from "react-router-dom";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
} from "@ionic/react";

import { STORE } from "data";
import { Container, Text } from "components";
import { KEY_ITEM, StoreItem, Idea, Comment, getItem } from "utils";

import { StreamItem } from "./shared/stream-item";
import { ActionButtonsChallengeDefault } from "./shared/action-buttons-challenge-default";

import { ActionButtonsChallengeExtended } from "./challenge/action-buttons-challenge-extended";
import { ButtonsToolbar } from "./challenge/buttons-toolbar";
import { Ideas } from "./challenge/ideas";

import styles from "./challenge.module.css";

export const Challenge: React.FC = () => {
  const { id } = useParams();

  const [storeItem, setStoreItem] = useState<StoreItem | null>(() => {
    switch (id) {
      case KEY_ITEM:
        return getItem(KEY_ITEM);
      default:
        return STORE.find((item) => item.id === id) || null;
    }
  });

  const newCommentHandler = useCallback((idea: Idea, newComment: Comment) => {
    setStoreItem((currentStoreItem) => {
      if (currentStoreItem === null) {
        return null;
      }

      const newIdeas = currentStoreItem.ideas.map((current) => {
        if (idea.id !== current.id) {
          return idea;
        }

        return {
          ...idea,
          ...{
            commentsCount: (idea.commentsCount || 0) + 1,
            comments: [...idea.comments, ...[newComment]],
          },
        };
      });

      return {
        ...currentStoreItem,
        ...{
          ideas: newIdeas,
        },
      };
    });
  }, []);

  if (storeItem === null) {
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
            <div className={styles.hidden}>
              <IonBackButton color="main" text={""} defaultHref="/home" />
            </div>
          </IonButtons>
          <IonTitle>
            <div className="ion-text-center">
              <Text color="main" size="md" bold={true}>
                vickies
              </Text>
            </div>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <Container>
          <StreamItem {...storeItem} showText={true} showActions={false} />
          <ActionButtonsChallengeDefault storeItem={storeItem} />
          <hr />
          <ActionButtonsChallengeExtended storeItem={storeItem} />
          <hr />
          <ButtonsToolbar storeItem={storeItem} />
          <hr />
          <Ideas storeItem={storeItem} onAddNewComment={newCommentHandler} />
        </Container>
      </IonContent>
    </IonPage>
  );
};
