import React from "react";
import cn from "classnames";
import { ITask } from "../../models/ITask";
import { Textarea } from "../Textarea";
import { CommentList } from "../CommentList";
import { Tag } from "../Tag";
import { Button } from "../Button";
import CalendarIcon from "./calendar.png";
import styles from "./taskEdit.module.scss";

function TaskEdit({
  description,
  lifetimeItems,
  statusRgb,
  statusName,
  initiatorName,
  executorName,
  priorityName,
  resolutionDatePlan,
  tags,
}: ITask) {
  return (
    <form className={styles.edit}>
      <div className={styles.edit__left}>
        <div className={styles.edit__block}>
          <p className={styles["edit__block-title"]}>Описание</p>
          <p className={styles["edit__block-text"]}>
            {description}
          </p>
        </div>
        <div className={styles.edit__block}>
          <p className={styles["edit__block-title"]}>Добавление комментариев</p>
          <Textarea className={styles.edit__textarea} />
          <Button>Сохранить</Button>
        </div>
        <div className={styles.edit__block}>
          {
            lifetimeItems && lifetimeItems.length > 0
              ? (
                <CommentList comments={lifetimeItems} />
              )
              : <p className={styles["edit__block-title"]}>Комментариев нет</p>
          }
        </div>
      </div>
      <div className={styles.edit__right}>
        <div className={cn(styles.edit__block, styles.edit__status)}>
          <div className={styles["edit__status-color"]} style={{ background: statusRgb }} />
          {/* <p className={styles["edit__status-name"]}>{statusName}</p> */}
          <select>
            <option value="1">{statusName}</option>
            <option value="2">{statusName}</option>
            <option value="3">{statusName}</option>
          </select>
        </div>
        <div className={styles.edit__block}>
          <p className={styles["edit__block-title"]}>Заявитель</p>
          <p className={styles["edit__block-text"]}>
            {initiatorName}
          </p>
        </div>
        <div className={styles.edit__block}>
          <p className={styles["edit__block-title"]}>Создана</p>
          <p className={styles["edit__block-text"]}>
            {initiatorName}
          </p>
        </div>
        <div className={styles.edit__block}>
          <p className={styles["edit__block-title"]}>Исполнитель</p>
          <p className={styles["edit__block-text"]}>
            <select>
              <option value="1">{executorName}</option>
              <option value="2">{executorName}</option>
              <option value="3">{executorName}</option>
            </select>
          </p>
        </div>
        <div className={styles.edit__block}>
          <p className={styles["edit__block-title"]}>Приоритет</p>
          <p className={styles["edit__block-text"]}>
            {priorityName}
          </p>
        </div>
        <div className={styles.edit__block}>
          <p className={styles["edit__block-title"]}>Срок</p>
          <p className={styles["edit__block-text"]}>
            <img src={CalendarIcon} alt="Календарь" className={styles.edit__icon} />
            {resolutionDatePlan}
          </p>
        </div>
        <div className={styles.edit__block}>
          <p className={styles["edit__block-title"]}>Теги</p>
          {tags.length > 0 ? tags.map((tag) => <Tag tag={tag} key={tag.id} />) : (
            <p className={styles["edit__block-text"]}>
              Тегов нет
            </p>
          )}
        </div>
      </div>
    </form>
  );
}

export default TaskEdit;
