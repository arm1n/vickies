import React, { FC, useMemo, useState, useCallback } from "react";
import { createPortal } from "react-dom";

import logoVariant1 from "icons/logo-variant1.svg";
import logoVariant2 from "icons/logo-variant2.svg";
import logoVariant3 from "icons/logo-variant3.svg";

import { Text } from "components";

import styles from "./start.module.css";

const THEMES = [
  {
    svg: logoVariant1,
    className: styles.variant1,
  },
  {
    svg: logoVariant2,
    className: styles.variant2,
  },
  {
    svg: logoVariant3,
    className: styles.variant3,
  },
];

type StartProps = {
  onHide?: () => void;
}

export const Start: FC<StartProps> = ({ onHide }) => {
  const [isVisible, setIsVisible] = useState(true);
  const variant = useMemo(() => THEMES[~~(Math.random() * THEMES.length)], []);
  const clickHandler = useCallback(() => {
    setIsVisible(false);

    if (typeof onHide === 'function') {
      setTimeout(() => onHide(), 1000);
    }
  }, [onHide]);
  const wrapperClassNames = useMemo(
    () =>
      [
        styles.wrapper,
        variant.className,
        isVisible ? styles.visible : styles.hidden,
      ].join(" "),
    [isVisible, variant]
  );

  return createPortal(
    <div className={wrapperClassNames} onClick={clickHandler} tabIndex={-1}>
      <div className={styles.content}>
        <img
          src={variant.svg}
          className={styles.svg}
          alt="Vickies - where ideas spark"
        />
        <div className={styles.text}>
          <Text size="lg" bold={true}>
            where
          </Text>{" "}
          <Text size="lg" type="special">
            ideas
          </Text>{" "}
          <Text size="lg" bold={true}>
            spark
          </Text>
        </div>
      </div>
    </div>,
    document.body
  );
};
