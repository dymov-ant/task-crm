import React from "react";
import cn from "classnames";
import { useAppDispatch, useTypeSelector } from "../../hooks/redux";
import { ITask } from "../../models/ITask";
import { TaskStatus } from "../TaskStatus";
import { formatId } from "../../helpers";
import { Divider } from "../Divider";
import { getTaskById } from "../../store/tasksSlice/actions";
import styles from "./taskList.module.scss";

function TaskList() {
  const dispatch = useAppDispatch();
  const { priorities } = useTypeSelector((state) => state.appReducer);
  const { tasks } = useTypeSelector((state) => state.tasksReducer);

  const handleTaskClick = (task: ITask) => {
    dispatch(getTaskById(task.id));
  };

  return (
    <div className={styles.list}>
      <div className={cn(styles.item, styles["item--header"])}>
        <div />
        <div className={styles.item__col}>ID</div>
        <div className={styles.item__col}>Название</div>
        <div className={styles.item__col}>Статус</div>
        <div className={styles.item__col}>Исполнитель</div>
      </div>
      <Divider color="dark" />
      {tasks.map((task) => (
        <div key={task.id}>
          {/* eslint-disable-next-line max-len */}
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid,jsx-a11y/click-events-have-key-events,jsx-a11y/interactive-supports-focus */ }
          <div
            role="button"
            className={styles.item}
            onClick={() => handleTaskClick(task)}
          >
            <div
              className={styles.item__priority}
              style={{ background: priorities.find((p) => p.id === task.priorityId)?.rgb }}
            />
            <div className={styles.item__col}>{formatId(task.id)}</div>
            <div className={cn(styles.item__col, styles.item__name)}>{task.name}</div>
            <div className={styles.item__col}>
              <TaskStatus statusName={task.statusName} statusRgb={task.statusRgb} />
            </div>
            <div className={styles.item__col}>{task.executorName}</div>
          </div>
          <Divider color="light" />
        </div>
      ))}
    </div>
  );
}

export default TaskList;
