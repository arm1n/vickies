import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import { Container, Text } from "components";

import { MyProfile } from "./shared/my-profile";
import { MyStream } from "./likes/my-stream";

export const Likes: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>
            <div className="ion-text-center">
              <Text color="main" size="md" bold={true}>
                my likes
              </Text>
            </div>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <MyProfile />
        <Container><MyStream /></Container>
      </IonContent>
    </IonPage>
  );
};
