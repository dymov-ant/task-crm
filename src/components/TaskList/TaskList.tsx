import React from "react";
import cn from "classnames";
import { setCurrentTask } from "../../store/tasksSlice/reducer";
import { useAppDispatch } from "../../hooks/redux";
import { ITask } from "../../models/ITask";
import { TaskStatus } from "../TaskStatus";
import { formatId } from "../../helpers";
import { Divider } from "../Divider";
import styles from "./taskList.module.scss";

function TaskList() {
  const priorities = [
    {
      rgb: "#fef6f6",
      id: 103311,
      name: "Очень низкий",
    },
    {
      rgb: "#fbd6b9",
      id: 103312,
      name: "Низкий",
    },
    {
      rgb: "#f75394",
      id: 103313,
      name: "Средний",
    },
    {
      rgb: "#b32c55",
      id: 103314,
      name: "Высокий",
    },
    {
      rgb: "#ee0909",
      id: 103315,
      name: "Критический",
    },
  ];
  const data: ITask[] = [
    {
      id: 191120,
      name: "Заказать обед",
      description: "<p style=\"color: #e5e5e5;\">Уха</p> из трех видов рыб. Салат с телятиной. МОРС КЛЮКВЕННЫЙ",
      createdAt: "2022-01-29T10:13:35.798192+03:00",
      updatedAt: "2022-01-29T10:13:35.798192+03:00",
      price: 100,
      taskTypeId: 69988,
      taskTypeName: "Стандартный",
      statusId: 119976,
      statusName: "Открыта",
      statusRgb: "#fd5e53",
      priorityId: 103313,
      priorityName: "Средний",
      serviceId: 69987,
      serviceName: "Еда > Заказ обедов",
      resolutionDatePlan: "2022-01-29T10:13:35.798192+03:00",
      initiatorId: 69989,
      initiatorName: "Иванов Андрей",
      executorId: 69988,
      executorName: "Петров Борис",
      executorGroupId: 69987,
      executorGroupName: "Офис менеджеры",
      tags: [
        {
          id: 103312,
          name: "Салат",
        },
        {
          id: 103311,
          name: "Суп",
        },
      ],
    },
    {
      id: 191121,
      name: "Заказать обед",
      description: "Уха из трех видов рыб. Салат с телятиной. МОРС КЛЮКВЕННЫЙ",
      createdAt: "2022-01-29T10:13:35.798192+03:00",
      updatedAt: "2022-01-29T10:13:35.798192+03:00",
      price: 100,
      taskTypeId: 69988,
      taskTypeName: "Стандартный",
      statusId: 119976,
      statusName: "Открыта",
      statusRgb: "#fd5e53",
      priorityId: 103313,
      priorityName: "Средний",
      serviceId: 69987,
      serviceName: "Еда > Заказ обедов",
      resolutionDatePlan: "2022-01-29T10:13:35.798192+03:00",
      initiatorId: 69989,
      initiatorName: "Иванов Андрей",
      executorId: 69988,
      executorName: "Петров Борис",
      executorGroupId: 69987,
      executorGroupName: "Офис менеджеры",
      tags: [
        {
          id: 103312,
          name: "Салат",
        },
        {
          id: 103311,
          name: "Суп",
        },
      ],
    },
    {
      id: 191122,
      name: "Заказать обед",
      description: "Уха из трех видов рыб. Салат с телятиной. МОРС КЛЮКВЕННЫЙ",
      createdAt: "2022-01-29T10:13:35.798192+03:00",
      updatedAt: "2022-01-29T10:13:35.798192+03:00",
      price: 100,
      taskTypeId: 69988,
      taskTypeName: "Стандартный",
      statusId: 119976,
      statusName: "Открыта",
      statusRgb: "#fd5e53",
      priorityId: 103313,
      priorityName: "Средний",
      serviceId: 69987,
      serviceName: "Еда > Заказ обедов",
      resolutionDatePlan: "2022-01-29T10:13:35.798192+03:00",
      initiatorId: 69989,
      initiatorName: "Иванов Андрей",
      executorId: 69988,
      executorName: "Петров Борис",
      executorGroupId: 69987,
      executorGroupName: "Офис менеджеры",
      tags: [
        {
          id: 103312,
          name: "Салат",
        },
        {
          id: 103311,
          name: "Суп",
        },
      ],
    },
    {
      id: 191123,
      name: "Заказать обед",
      description: "Уха из трех видов рыб. Салат с телятиной. МОРС КЛЮКВЕННЫЙ",
      createdAt: "2022-01-29T10:13:35.798192+03:00",
      updatedAt: "2022-01-29T10:13:35.798192+03:00",
      price: 100,
      taskTypeId: 69988,
      taskTypeName: "Стандартный",
      statusId: 119977,
      statusName: "Выполнена",
      statusRgb: "#025969",
      priorityId: 103313,
      priorityName: "Средний",
      serviceId: 69987,
      serviceName: "Еда > Заказ обедов",
      resolutionDatePlan: "2022-01-29T10:13:35.798192+03:00",
      initiatorId: 69989,
      initiatorName: "Иванов Андрей",
      executorId: 69988,
      executorName: "Петров Борис",
      executorGroupId: 69987,
      executorGroupName: "Офис менеджеры",
      tags: [
        {
          id: 103312,
          name: "Салат",
        },
        {
          id: 103311,
          name: "Суп",
        },
      ],
    },
    {
      id: 191124,
      name: "Заказать обед",
      description: "Уха из трех видов рыб. Салат с телятиной. МОРС КЛЮКВЕННЫЙ",
      createdAt: "2022-01-29T10:13:35.798192+03:00",
      updatedAt: "2022-01-29T10:13:35.798192+03:00",
      price: 100,
      taskTypeId: 69988,
      taskTypeName: "Стандартный",
      statusId: 119975,
      statusName: "В работе",
      statusRgb: "#fcad51",
      priorityId: 103313,
      priorityName: "Средний",
      serviceId: 69987,
      serviceName: "Еда > Заказ обедов",
      resolutionDatePlan: "2022-01-29T10:13:35.798192+03:00",
      initiatorId: 69989,
      initiatorName: "Иванов Андрей",
      executorId: 69988,
      executorName: "Петров Борис",
      executorGroupId: 69987,
      executorGroupName: "Офис менеджеры",
      tags: [
        {
          id: 103312,
          name: "Салат",
        },
        {
          id: 103311,
          name: "Суп",
        },
      ],
    },
    {
      id: 191125,
      name: "Починить компьютер Починить компьютер Починить компьютер Починить компьютер Починить компьютер Починить компьютер Починить компьютер ",
      description: "<p style=\"color:red;\">Не загружается</p>",
      createdAt: "2022-01-29T10:13:35.798192+03:00",
      updatedAt: "2022-01-29T10:13:35.798192+03:00",
      price: 100,
      taskTypeId: 69989,
      taskTypeName: "Запрос на обслуживание",
      statusId: 119976,
      statusName: "Открыта",
      statusRgb: "#fd5e53",
      priorityId: 103314,
      priorityName: "Высокий",
      serviceId: 69988,
      serviceName: "Обслуживание > Техническая поддержка",
      resolutionDatePlan: "2022-01-29T10:13:35.798192+03:00",
      initiatorId: 69989,
      initiatorName: "Иванов Андрей",
      executorId: 69987,
      executorName: "Сидоров Иван",
      executorGroupId: 69988,
      executorGroupName: "Технические специалисты",
      tags: [
        {
          id: 103314,
          name: "Важно",
        },
      ],
    },
    {
      id: 191126,
      name: "Починить компьютер Починить компьютер Починить компьютер Починить компьютер Починить компьютер Починить компьютер Починить компьютер Починить компьютер Починить компьютер ",
      description: "Не загружается",
      createdAt: "2022-01-29T10:13:35.798192+03:00",
      updatedAt: "2022-01-29T10:13:35.798192+03:00",
      price: 100,
      taskTypeId: 69989,
      taskTypeName: "Запрос на обслуживание",
      statusId: 119976,
      statusName: "Открыта",
      statusRgb: "#fd5e53",
      priorityId: 103314,
      priorityName: "Высокий",
      serviceId: 69988,
      serviceName: "Обслуживание > Техническая поддержка",
      resolutionDatePlan: "2022-01-29T10:13:35.798192+03:00",
      initiatorId: 69989,
      initiatorName: "Иванов Андрей",
      executorId: 69987,
      executorName: "Сидоров Иван",
      executorGroupId: 69988,
      executorGroupName: "Технические специалисты",
      tags: [
        {
          id: 103314,
          name: "Важно",
        },
      ],
    },
    {
      id: 191127,
      name: "Починить компьютер",
      description: "Не загружается",
      createdAt: "2022-01-29T10:13:35.798192+03:00",
      updatedAt: "2022-01-29T10:13:35.798192+03:00",
      price: 100,
      taskTypeId: 69989,
      taskTypeName: "Запрос на обслуживание",
      statusId: 119975,
      statusName: "В работе",
      statusRgb: "#fcad51",
      priorityId: 103314,
      priorityName: "Высокий",
      serviceId: 69988,
      serviceName: "Обслуживание > Техническая поддержка",
      resolutionDatePlan: "2022-01-29T10:13:35.798192+03:00",
      initiatorId: 69989,
      initiatorName: "Иванов Андрей",
      executorId: 69987,
      executorName: "Сидоров Иван",
      executorGroupId: 69988,
      executorGroupName: "Технические специалисты",
      tags: [
        {
          id: 103314,
          name: "Важно",
        },
      ],
    },
    {
      id: 191128,
      name: "Починить компьютер",
      description: "Не загружается",
      createdAt: "2022-01-29T10:13:35.798192+03:00",
      updatedAt: "2022-01-29T10:13:35.798192+03:00",
      price: 100,
      taskTypeId: 69989,
      taskTypeName: "Запрос на обслуживание",
      statusId: 119977,
      statusName: "Выполнена",
      statusRgb: "#025969",
      priorityId: 103314,
      priorityName: "Высокий",
      serviceId: 69988,
      serviceName: "Обслуживание > Техническая поддержка",
      resolutionDatePlan: "2022-01-29T10:13:35.798192+03:00",
      initiatorId: 69989,
      initiatorName: "Иванов Андрей",
      executorId: 69987,
      executorName: "Сидоров Иван",
      executorGroupId: 69988,
      executorGroupName: "Технические специалисты",
      tags: [
        {
          id: 103314,
          name: "Важно",
        },
      ],
    },
    {
      id: 191129,
      name: "Починить компьютер",
      description: "Не загружается",
      createdAt: "2022-01-29T10:13:35.798192+03:00",
      updatedAt: "2022-01-29T10:13:35.798192+03:00",
      price: 100,
      taskTypeId: 69989,
      taskTypeName: "Запрос на обслуживание",
      statusId: 119973,
      statusName: "Отложена",
      statusRgb: "#909090",
      priorityId: 103314,
      priorityName: "Высокий",
      serviceId: 69988,
      serviceName: "Обслуживание > Техническая поддержка",
      resolutionDatePlan: "2022-01-29T10:13:35.798192+03:00",
      initiatorId: 69989,
      initiatorName: "Иванов Андрей",
      executorId: 69987,
      executorName: "Сидоров Иван",
      executorGroupId: 69988,
      executorGroupName: "Технические специалисты",
      tags: [
        {
          id: 103314,
          name: "Важно",
        },
      ],
    },
  ];

  const dispatch = useAppDispatch();

  const handleTaskClick = (task: ITask) => {
    dispatch(setCurrentTask(task));
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
      {data.map((task) => (
        <>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a
            href="#"
            role="button"
            key={task.id}
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
          </a>
          <Divider color="light" />
        </>
      ))}
    </div>
  );
}

export default TaskList;
