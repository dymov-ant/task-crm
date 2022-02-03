import React from "react";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
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
            {`${format(new Date(createdAt), "dd MMMM, H:mm'", { locale: ru })} прокомментировал`}
          </p>
        </div>
        <p className={styles.comment__text} dangerouslySetInnerHTML={{ __html: comment }} />
      </div>
    </div>
  );
}

export default Comment;
