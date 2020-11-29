import React, { FC } from "react";

import styles from "./container.module.css";

type ContainerProps = {};

export const Container: FC<ContainerProps> = ({
  children,
}) =>  <div className={styles.wrapper}>{children}</div>;
