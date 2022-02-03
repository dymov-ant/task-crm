import { api } from "./index";
import { IPriority } from "../models/IPriority";

export const APIGetPriorities = () => api.get<IPriority[]>("/Priorities");
