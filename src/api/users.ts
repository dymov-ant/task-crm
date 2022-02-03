import { api } from "./index";
import { IUser } from "../models/IUser";

export const APIGetAllUsers = () => api.get<IUser[]>("/Users");
