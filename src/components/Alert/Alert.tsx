import React from "react";
import styles from "./alert.module.scss";

interface AlertProps {
  message: string;
  handleClose: () => void;
}

function Alert({ message, handleClose }: AlertProps) {
  return (
    <div className={styles.alert}>
      <button
        className={styles.alert__btn}
        type="button"
        onClick={handleClose}
      >
        &#215;
      </button>
      {message}
    </div>
  );
}

export default Alert;
