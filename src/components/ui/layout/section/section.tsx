import React, { FC, useMemo } from "react";

import styles from "./section.module.css";

type SectionProps = {
	size?: "xs" | "sm" | "md" | "lg" | "xl";
};

export const Section: FC<SectionProps> = ({
  size = "md",
  children,
}) => {
  const wrapperClassName = useMemo(
    () =>
      [styles.wrapper, styles[size]].join(" "),
    [size]
  );

  return <div className={wrapperClassName}>{children}</div>;
};

