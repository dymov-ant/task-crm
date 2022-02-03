import { api } from "./index";
import { IStatus } from "../models/IStatus";

export const APIGetStatuses = () => api.get<IStatus[]>("/Statuses");
