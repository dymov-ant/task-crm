import React from "react";
import { Link, NavLink } from "react-router-dom";
import cn from "classnames";
import { RouteNames } from "../../router/routes";
import LogoIcon from "./icons/logo.png";
import KnowledgeIcon from "./icons/knowledge.png";
import TasksIcon from "./icons/tasks.png";
import EmployeesIcon from "./icons/employees.png";
import ClientsIcon from "./icons/clients.png";
import AssetsIcon from "./icons/assets.png";
import SettingsIcon from "./icons/settings.png";
import styles from "./sidebar.module.scss";

function Sidebar() {
  const menuData = [
    { name: "База знаний", path: RouteNames.KNOWLEDGE_BASE, icon: KnowledgeIcon },
    { name: "Заявки", path: RouteNames.TASKS, icon: TasksIcon },
    { name: "Сотрудники", path: RouteNames.EMPLOYEES, icon: EmployeesIcon },
    { name: "Клиенты", path: RouteNames.CLIENTS, icon: ClientsIcon },
    { name: "Активы", path: RouteNames.ASSETS, icon: AssetsIcon },
    { name: "Настройки", path: RouteNames.SETTINGS, icon: SettingsIcon },
  ];

  return (
    <div className={styles.sidebar}>
      <Link to={RouteNames.TASKS}>
        <div className={styles.sidebar__logo}>
          <img src={LogoIcon} alt="Лого" />
        </div>
      </Link>
      <ul>
        {menuData.map((menuItem) => (
          <li key={menuItem.path} className={styles.sidebar__item}>
            <NavLink
              to={menuItem.path}
              className={({ isActive }) => cn(styles.sidebar__link, {
                [styles["sidebar__link--active"]]: isActive,
              })}
            >
              <img src={menuItem.icon} alt="" />
              <p>{menuItem.name}</p>
            </NavLink>
          </li>
        )) }
      </ul>
    </div>
  );
}

export default Sidebar;
