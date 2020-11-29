import React, { FC, ReactNode, useMemo, useCallback, useState } from "react";

import styles from "./text.module.css";

type TextPropsCommon = {
  bold?: boolean;
  nl2br?: boolean;
  truncate?: number;
  expandable?: boolean;
  type?: "default" | "special";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
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
  onToggleMore?: (state: boolean) => void;
};

type TextPropsUnion =
  | {
      content: ReactNode;
      children?: never;
    }
  | {
      children: ReactNode;
      content?: never;
    };

type TextProps = TextPropsCommon & TextPropsUnion;

export const Text: FC<TextProps> = ({
  type = "default",
  size = "md",
  color = "inherit",
  content,
  children,
  bold = false,
  truncate = 0,
  nl2br = false,
  expandable = false,
  onToggleMore = () => {},
}) => {
  const [showMore, setShowMore] = useState(false);

  const wrapperClassName = useMemo(
    () =>
      [
        styles.wrapper,
        styles[size],
        styles[type],
        styles[color],
        bold ? styles.bold : "",
      ].join(" "),
    [size, type, color, bold]
  );
  const text = useMemo(() => content || children, [content, children]);

  const truncating = useMemo(
    () =>
      typeof text === "string" &&
      truncate > 0 &&
      text.length > truncate &&
      !showMore,
    [text, truncate, showMore]
  );

  const truncatedText = useMemo(
    () =>
      typeof text === "string" && truncating
        ? `${text.slice(0, truncate)}...`
        : text,
    [text, truncating, truncate]
  );

  const processedText = useMemo(
    () =>
      typeof truncatedText === "string" && nl2br ? (
        <span
          dangerouslySetInnerHTML={{
            __html: truncatedText.replace(/(?:\r\n|\r|\n)/g, "<br>"),
          }}
        />
      ) : (
        truncatedText
      ),
    [truncatedText, nl2br]
  );

  const moreHandler = useCallback(() => {
    setShowMore((oldState) => {
      const newState = !oldState;
      onToggleMore(newState);
      return newState;
    });
  }, [onToggleMore]);

  return (
    <span className={wrapperClassName}>
      {processedText}
      {expandable && truncating && (
        <button onClick={moreHandler} className={styles.more}>
          more
        </button>
      )}
    </span>
  );
};
