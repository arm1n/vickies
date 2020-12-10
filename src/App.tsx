import React, { FC, useState, useCallback } from "react";
import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { IonReactHashRouter } from "@ionic/react-router";
// import { ellipseOutline, squareOutline, triangle } from "ionicons/icons";

import { Start, Home, Search, Add, Edit, Likes, Ideas } from "pages";

import homeIcon from "icons/home.svg";
import searchIcon from "icons/search.svg";
import addIcon from "icons/add.svg";
import likesIcon from "icons/like.svg";
import ideasIcon from "icons/idea.svg";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

import "./theme/main.css";

import styles from "./App.module.css";

const App: FC = () => {
  const [initialized, setInitialized] = useState(false);
  const hideHandler = useCallback(() => setInitialized(true), []);
  return (
    <IonApp>
      <IonReactHashRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route path="/home" component={Home} exact={true} />
            <Route path="/search" component={Search} exact={true} />
            <Route path="/likes" component={Likes} exact={true} />
            <Route path="/add" component={Add} exact={true} />
            <Route path="/edit/:key" component={Edit} exact={true} />
            <Route path="/ideas" component={Ideas} exact={true} />
            <Route
              path="/start"
              render={() =>
                initialized ? (
                  <Redirect to="/home" />
                ) : (
                  <Start onHide={hideHandler} />
                )
              }
              exact={true}
            />
            <Route
              path="/"
              render={() => <Redirect to="/start" />}
              exact={true}
            />
            <Route render={() => <Redirect to="/home" />} />
          </IonRouterOutlet>
          <IonTabBar slot="bottom" className={styles.tabbar}>
            <IonTabButton layout="label-hide" tab="home" href="/home">
              <IonIcon src={homeIcon} />
            </IonTabButton>
            <IonTabButton layout="label-hide" tab="search" href="/search">
              <IonIcon icon={searchIcon} />
            </IonTabButton>
            <IonTabButton layout="label-hide" tab="add" href="/add">
              <IonIcon icon={addIcon} />
            </IonTabButton>
            <IonTabButton layout="label-hide" tab="likes" href="/likes">
              <IonIcon icon={likesIcon} />
            </IonTabButton>
            <IonTabButton layout="label-hide" tab="ideas" href="/ideas">
              <IonIcon icon={ideasIcon} />
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactHashRouter>
    </IonApp>
  );
};

export default App;
