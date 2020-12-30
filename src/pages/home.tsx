import React, { FC, Fragment } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonItem,
  IonAvatar,
  IonToolbar,
  IonButtons,
  IonButton,
  IonIcon,
} from "@ionic/react";

import { Container, Section, Title } from "components";
import profile_hansjoerg_rogen from "images/profiles/profile-hansjoerg-rogen.jpg";
import messageIcon from "icons/message.svg";

import { MyIdeas } from "./home/my-ideas";
import { MyStream } from "./home/my-stream";

import styles from "./home.module.css";

export const Home: FC = () => (
  <Fragment>
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonItem slot="start" lines="none" className={styles.ionitem}>
            <IonAvatar>
              <img src={profile_hansjoerg_rogen} alt="" />
            </IonAvatar>
          </IonItem>
          <IonButtons slot="end">
            <IonButton color="dark">
              <IonIcon slot="icon-only" src={messageIcon} />
            </IonButton>
          </IonButtons>
          <IonTitle>
            <div className="ion-text-center">
              <Title noMargin={true}>vickies</Title>
            </div>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <Container>
          <Section>
            <div className={styles.myideas}>
              <MyIdeas />
            </div>
          </Section>
          <Section>
            <MyStream />
          </Section>
        </Container>
      </IonContent>
    </IonPage>
  </Fragment>
);
