import React, { ReactNode } from "react";
import { KnowledgePage } from "../pages/KnowledgePage";
import { TasksPage } from "../pages/TasksPage";
import { EmployeesPage } from "../pages/EmployeesPage";
import { ClientsPage } from "../pages/ClientsPage";
import { AssetsPage } from "../pages/AssetsPage";
import { SettingsPage } from "../pages/SettingsPage";

export interface IRoute {
  path: string;
  element: ReactNode;
}

export enum RouteNames {
  KNOWLEDGE_BASE = "/knowledge",
  TASKS = "/tasks",
  EMPLOYEES = "/employees",
  CLIENTS = "/clients",
  ASSETS = "/assets",
  SETTINGS = "/settings",
}

export const appRoutes: IRoute[] = [
  { path: RouteNames.KNOWLEDGE_BASE, element: <KnowledgePage /> },
  { path: RouteNames.TASKS, element: <TasksPage /> },
  { path: RouteNames.EMPLOYEES, element: <EmployeesPage /> },
  { path: RouteNames.CLIENTS, element: <ClientsPage /> },
  { path: RouteNames.ASSETS, element: <AssetsPage /> },
  { path: RouteNames.SETTINGS, element: <SettingsPage /> },
];
