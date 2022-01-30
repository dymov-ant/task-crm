import React, { DetailedHTMLProps, TextareaHTMLAttributes } from "react";
import cn from "classnames";
import styles from "./textarea.module.scss";

interface TextareaProps
  extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {

}

function Textarea({ className, ...props }: TextareaProps) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <textarea className={cn(styles.textarea, className)} {...props} />
  );
}

export default Textarea;
