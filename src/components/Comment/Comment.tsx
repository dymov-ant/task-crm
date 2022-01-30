import React from "react";
import { ILifetimeItem } from "../../models/ITask";
import styles from "./comment.module.scss";

function Comment({ userName, createdAt, comment }: ILifetimeItem) {
  return (
    <div className={styles.comment}>
      <div className={styles.comment__avatar} />
      <div className={styles.comment__body}>
        <div className={styles.comment__header}>
          <p className={styles.comment__name}>{userName}</p>
          <p className={styles.comment__date}>
            {`${createdAt} прокомментировал`}
          </p>
        </div>
        <p className={styles.comment__text}>{comment}</p>
      </div>
    </div>
  );
}

export default Comment;
