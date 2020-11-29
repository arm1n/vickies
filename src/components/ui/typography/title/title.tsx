import React, { useMemo } from "react";
import type { FC, ReactNode } from "react";

import styles from "./title.module.css";

type TitlePropsCommon = {
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  type?: "default" | "special";
  noMargin?: boolean;
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
  noMargin,
  children,
  content,
}) => {
  const wrapperClassName = useMemo(
    () =>
      [styles.wrapper, styles[Tag], styles[type], noMargin === true ? styles["no-margin"] : ""].join(" "),
    [Tag, type, noMargin]
  );
  return <Tag className={wrapperClassName}>{content || children}</Tag>;
};
