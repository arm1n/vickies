import React, { FC, ReactNode, useMemo } from "react";

import styles from "./title.module.css";

type TitlePropsCommon = {
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  type?: "default" | "special";
  color?:
    | "dark"
    | "medium"
    | "light"
    | "primary"
    | "secondary"
    | "tertiary"
    | "success"
    | "warning"
    | "danger"
    | "main"
    | "inherit";
  noMargin?: boolean;
  truncate?: boolean;
};

type TitlePropsUnion =
  | {
      content: ReactNode;
      children?: never;
    }
  | {
      children: ReactNode;
      content?: never;
    };

type TitleProps = TitlePropsCommon & TitlePropsUnion;

export const Title: FC<TitleProps> = ({
  tag: Tag = "h1",
  type = "default",
  color = "dark",
  truncate,
  noMargin,
  children,
  content,
}) => {
  const wrapperClassName = useMemo(
    () =>
      [
        styles.wrapper,
        styles[Tag],
        styles[type],
        styles[color],
        truncate === true ? styles.truncate : "",
        noMargin === true ? styles["no-margin"] : "",
      ].join(" "),
    [Tag, type, color, truncate, noMargin]
  );
  return <Tag className={wrapperClassName}>{content || children}</Tag>;
};
