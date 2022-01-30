import React from "react";
import cn from "classnames";
import styles from "./divider.module.scss";

interface DividerProps {
  variant?: "horizontal" | "vertical";
  color?: "dark" | "light"
}

function Divider({ variant = "horizontal", color = "light" }: DividerProps) {
  return (
    <div className={cn(styles.divider, {
      [styles["divider--horizontal"]]: variant === "horizontal",
      [styles["divider--vertical"]]: variant === "vertical",
      [styles["divider--dark"]]: color === "dark",
      [styles["divider--light"]]: color === "light",
    })}
    />
  );
}

export default Divider;
