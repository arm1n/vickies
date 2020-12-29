import React, { useMemo, useCallback, useState } from "react";
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
import { KEY_ITEM, StoreItem, getItem } from "utils";

import { StreamItem } from "./shared/stream-item";
import { ActionButtons } from "./shared/action-buttons";

import { Meta } from "./idea/meta";
import { Comments } from "./idea/comments";
import { NewComment } from "./idea/new-comment";

import styles from "./idea.module.css";

export const Idea: React.FC = () => {
  const { id } = useParams();

  const [storeItem, setStoreItem] = useState<StoreItem | null>(() => {
    switch (id) {
      case KEY_ITEM:
        return getItem(KEY_ITEM);
      default:
        return STORE.find((item) => item.id === id) || null;
    }
  });

  const newCommentHandler = useCallback((newComment) => {
    setStoreItem((currentStoreItem) => {
      if (currentStoreItem === null) {
        return null;
      }

      return {
        ...currentStoreItem,
        ...{
          commentItems: [...currentStoreItem.commentItems, ...[newComment]],
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
          <Meta storeItem={storeItem} />
          <hr />
          <ActionButtons storeItem={storeItem} showNumbers={false} />
          <hr />
        </Container>
        <Comments storeItem={storeItem} />
        <NewComment storeItem={storeItem} onSubmit={newCommentHandler} />
      </IonContent>
    </IonPage>
  );
};
