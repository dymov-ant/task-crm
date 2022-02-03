import axios from "axios";
import { ITask, PayloadUpdateTask, ResponseGetAllTask } from "../models/ITask";
import { api } from "./index";

export const APIGetAllTasks = () => axios.get<ResponseGetAllTask>("http://intravision-task.test01.intravision.ru/odata/tasks", {
  params: {
    tenantguid: process.env.REACT_APP_TENANTGUID,
  },
});

export const APIGetTaskById = (id: number) => api.get<ITask>(`/Tasks/${id}`);

export const APICreateTask = (name: string, description: string) => api.post<number>("/Tasks", {
  name,
  description,
});

export const APIUpdateTask = (task: PayloadUpdateTask) => api.put("/Tasks", {
  ...task,
});
