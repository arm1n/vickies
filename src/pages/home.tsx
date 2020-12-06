import React, { Fragment } from "react";
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
import messageIcon from "icons/message.svg";
import avatarImg from "images/profile1.jpg";


import { MyIdeas } from "./home/my-ideas";
import { MyStream } from "./home/my-stream";
import { SplashScreen } from "./home/splashscreen";

import styles from "./home.module.css";

export const Home: React.FC = () => (
  <Fragment>
    <SplashScreen />
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonItem slot="start" lines="none" className={styles.ionitem}>
            <IonAvatar>
              <img src={avatarImg} alt="" />
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
        {/*<IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader>*/}
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
      {/*<IonFooter>
      <IonToolbar>
        <IonSearchbar value="XXX" />
      </IonToolbar>
    </IonFooter>*/}
    </IonPage>
  </Fragment>
);
