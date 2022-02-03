import React, { ChangeEvent, useState } from "react";
import { format } from "date-fns";
import cn from "classnames";
import { ITask, PayloadUpdateTask } from "../../models/ITask";
import { Textarea } from "../Textarea";
import { CommentList } from "../CommentList";
import { Tag } from "../Tag";
import { Button } from "../Button";
import CalendarIcon from "./calendar.png";
import { useAppDispatch, useTypeSelector } from "../../hooks/redux";
import { IStatus } from "../../models/IStatus";
import { IUser } from "../../models/IUser";
import { updateTask } from "../../store/tasksSlice/actions";
import { InputErrorMessage } from "../InputErrorMessage";
import styles from "./taskEdit.module.scss";

function TaskEdit(props: ITask) {
  const {
    statusId,
    executorId,
    description,
    lifetimeItems,
    initiatorName,
    priorityName,
    resolutionDatePlan,
    tags,
    ...task
  } = props;
  const dispatch = useAppDispatch();
  const { statuses, users } = useTypeSelector((state) => state.appReducer);

  const [taskStatus, setTaskStatus] = useState<IStatus | null>(
    statuses.find((status) => status.id === statusId) || null,
  );
  const [taskExecutor, setTaskExecutor] = useState<IUser | null>(
    users.find((user) => user.id === executorId) || null,
  );

  const [comment, setComment] = useState("");
  const [commentError, setCommentError] = useState(false);

  const statusOptions = statuses.map((status) => (
    <option key={status.id} value={status.id}>{ status.name }</option>
  ));

  const executerOptions = users.map((user) => (
    <option key={user.id} value={user.id}>{ user.name }</option>
  ));

  const taskStatusChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setTaskStatus((prevState) => statuses.find((st) => st.id === +e.target.value) || prevState);
  };

  const taskExecutorChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setTaskExecutor((prevState) => users.find((user) => user.id === +e.target.value) || prevState);
  };

  const commentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
    if (comment.trim() !== "") {
      setCommentError(false);
    }
  };

  const onSubmit = () => {
    if (taskStatus && taskExecutor) {
      if (comment.trim() === "") {
        setCommentError(true);
      } else {
        const values: PayloadUpdateTask = {
          id: task.id,
          statusId: taskStatus.id,
          statusName: taskStatus.name,
          statusRgb: taskStatus.rgb,
          executorId: taskExecutor.id,
          executorName: taskExecutor.name,
          comment,
        };
        dispatch(updateTask(values));
      }
    }
  };

  return (
    <form className={styles.edit}>
      <div className={styles.edit__left}>
        <div className={styles.edit__block}>
          <p className={styles["edit__block-title"]}>Описание</p>
          <p className={styles["edit__block-text"]} dangerouslySetInnerHTML={{ __html: description }} />
        </div>
        <div className={styles.edit__block}>
          <p className={styles["edit__block-title"]}>Добавление комментариев</p>
          <div className={styles.edit__textarea}>
            <Textarea value={comment} onChange={commentChange} error={commentError} />
            {commentError && <InputErrorMessage className={styles["edit__error-message"]} />}
          </div>
          <Button onClick={onSubmit}>Сохранить</Button>
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
          <div className={styles["edit__status-color"]} style={{ background: taskStatus?.rgb }} />
          <select value={taskStatus?.id} onChange={taskStatusChange}>
            { statusOptions }
          </select>
        </div>
        <div className={styles.edit__block}>
          <p className={styles["edit__block-title"]}>Заявитель</p>
          <p className={styles["edit__block-text"]}>
            { initiatorName }
          </p>
        </div>
        <div className={styles.edit__block}>
          <p className={styles["edit__block-title"]}>Создана</p>
          <p className={styles["edit__block-text"]}>
            { initiatorName }
          </p>
        </div>
        <div className={styles.edit__block}>
          <p className={styles["edit__block-title"]}>Исполнитель</p>
          <p className={styles["edit__block-text"]}>
            <select value={taskExecutor?.id} onChange={taskExecutorChange}>
              { executerOptions }
            </select>
          </p>
        </div>
        <div className={styles.edit__block}>
          <p className={styles["edit__block-title"]}>Приоритет</p>
          <p className={styles["edit__block-text"]}>
            { priorityName }
          </p>
        </div>
        <div className={styles.edit__block}>
          <p className={styles["edit__block-title"]}>Срок</p>
          <p className={styles["edit__block-text"]}>
            <img src={CalendarIcon} alt="Календарь" className={styles.edit__icon} />
            { format(new Date(resolutionDatePlan), "dd.MM.yyyy'") }
          </p>
        </div>
        <div className={styles.edit__block}>
          <p className={styles["edit__block-title"]}>Теги</p>
          { tags.length > 0 ? tags.map((tag) => <Tag tag={tag} key={tag.id} />) : (
            <p className={styles["edit__block-text"]}>
              Тегов нет
            </p>
          ) }
        </div>
      </div>
    </form>
  );
}

export default TaskEdit;
