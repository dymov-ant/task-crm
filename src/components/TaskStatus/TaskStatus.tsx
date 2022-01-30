import React from "react";
import styles from "./taskStatus.module.scss";

interface TaskStatusProps {
  statusName: string;
  statusRgb: string;
}

function TaskStatus({ statusName, statusRgb }: TaskStatusProps) {
  return (
    <div className={styles.status} style={{ background: statusRgb }}>
      {statusName}
    </div>
  );
}

export default TaskStatus;
