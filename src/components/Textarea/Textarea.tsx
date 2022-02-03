import React, { DetailedHTMLProps, TextareaHTMLAttributes } from "react";
import cn from "classnames";
import styles from "./textarea.module.scss";

interface TextareaProps
  extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
  error?: boolean;
}

function Textarea({ className, error, ...props }: TextareaProps) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <textarea className={cn(styles.textarea, className, { [styles.error]: error })} {...props} />
  );
}

export default Textarea;
