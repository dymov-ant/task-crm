import React, { ButtonHTMLAttributes, DetailedHTMLProps, FC } from "react";
import cn from "classnames";
import styles from "./button.module.scss";

interface ButtonProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  submit?: boolean;
  size?: "big" | "default";
}

// eslint-disable-next-line react/function-component-definition
const Button: FC<ButtonProps> = ({
  submit,
  size = "default",
  children,
  className,
  ...props
}) => (
  <button
    type={submit ? "submit" : "button"}
    className={cn(styles.button, className, {
      [styles["button--big"]]: size === "big",
    })}
    {...props}
  >
    {children}
  </button>
);

export default Button;
