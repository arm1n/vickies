import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import { Container, Text } from "components";

import { MyStream } from "./challenges/my-stream";
import { MyProfile } from "./shared/my-profile";

export const Challenges: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>
            <div className="ion-text-center">
              <Text color="main" size="md" bold={true}>
                my challenges
              </Text>
            </div>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <MyProfile />
        <Container>
          <MyStream />
        </Container>
      </IonContent>
    </IonPage>
  );
};
