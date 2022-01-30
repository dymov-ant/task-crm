import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { appRoutes, RouteNames } from "../router/routes";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import styles from "./mainLayout.module.scss";

function MainLayout() {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <div className={styles.content}>
        <Header />
        <Routes>
          <>
            { appRoutes.map((route) => (
              <Route path={route.path} element={route.element} key={route.path} />
            ))}
            <Route path="*" element={<Navigate to={RouteNames.TASKS} />} />
          </>
        </Routes>
      </div>
    </div>
  );
}

export default MainLayout;
