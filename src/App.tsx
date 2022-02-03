import React, { useEffect } from "react";
import { MainLayout } from "./layout";
import { useAppDispatch, useTypeSelector } from "./hooks/redux";
import { getPriorities, getStatuses, getUsers } from "./store/appSlice/actions";
import { Spinner } from "./components/Spinner";
import { Alert } from "./components/Alert";
import { clearError } from "./store/appSlice/reducer";

function App() {
  const dispatch = useAppDispatch();
  const { loading, error } = useTypeSelector((state) => state.appReducer);
  const { users, priorities, statuses } = loading;

  const clearErrorHandler = () => {
    dispatch(clearError());
  };

  useEffect(() => {
    dispatch(getUsers());
    dispatch(getPriorities());
    dispatch(getStatuses());
  }, []);

  if (users || priorities || statuses) {
    return <Spinner />;
  }

  return (
    <>
      <MainLayout />
      {error && <Alert message={error} handleClose={clearErrorHandler} />}
    </>
  );
}

export default App;
