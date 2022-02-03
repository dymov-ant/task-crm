import React from "react";
import cn from "classnames";
import styles from "./inputErrorMessage.module.scss";

interface InputErrorMessageProps {
  message?: string;
  className?: string;
}

function InputErrorMessage({ message = "Поле обязательно!", className }: InputErrorMessageProps) {
  return (
    <span className={cn(styles.message, className)}>{message}</span>
  );
}

export default InputErrorMessage;
