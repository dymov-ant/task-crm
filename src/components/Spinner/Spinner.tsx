import React from "react";
import styles from "./spinner.module.scss";

function Spinner() {
  return (
    <div className={styles["spin-wrapper"]}>
      <div className={styles.spinner} />
    </div>
  );
}

export default Spinner;
