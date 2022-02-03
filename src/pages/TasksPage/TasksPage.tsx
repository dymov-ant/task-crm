import React, { useEffect, useState } from "react";
import { TaskList } from "../../components/TaskList";
import { useAppDispatch, useTypeSelector } from "../../hooks/redux";
import { Panel } from "../../components/Panel";
import { TaskEdit } from "../../components/TaskEdit";
import { formatId } from "../../helpers";
import { Button } from "../../components/Button";
import { TaskAdd } from "../../components/TaskAdd";
import { clearError, setCurrentTask } from "../../store/tasksSlice/reducer";
import { getAllTasks } from "../../store/tasksSlice/actions";
import { Spinner } from "../../components/Spinner";
import { Alert } from "../../components/Alert";

function TasksPage() {
  const dispatch = useAppDispatch();
  const {
    currentTask,
    isAllLoading,
    isTaskLoading,
    error,
  } = useTypeSelector((state) => state.tasksReducer);
  const [editPanelOpen, setEditPanelOpen] = useState(false);
  const [addPanelOpen, setAddPanelOpen] = useState(false);

  useEffect(() => {
    dispatch(getAllTasks());
  }, []);

  useEffect(() => {
    if (currentTask) {
      setAddPanelOpen(false);
      setEditPanelOpen(true);
    }
  }, [currentTask]);

  const closeEditPanel = () => {
    dispatch(setCurrentTask(null));
    setEditPanelOpen(false);
  };

  const openAddPanel = () => {
    setEditPanelOpen(false);
    setAddPanelOpen(true);
  };

  const closeAddPanel = () => {
    setAddPanelOpen(false);
  };

  const clearErrorHandler = () => {
    dispatch(clearError());
  };

  if (isAllLoading) {
    return (
      <div className="page">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="page">
      <div className="page__header">
        <Button size="big" onClick={openAddPanel}>Создать заявку</Button>
      </div>
      <div className="page__body">
        <TaskList />
      </div>
      { currentTask && (
        <Panel
          title={isTaskLoading ? "" : `№ ${formatId(currentTask.id)}`}
          subTitle={isTaskLoading ? "" : currentTask.name}
          open={editPanelOpen}
          handleClose={closeEditPanel}
        >
          {isTaskLoading ? <Spinner /> : <TaskEdit {...currentTask} />}
        </Panel>
      )}
      <Panel
        title={isTaskLoading ? "" : "Новая заявка"}
        open={addPanelOpen}
        handleClose={closeAddPanel}
      >
        {isTaskLoading ? <Spinner /> : <TaskAdd />}
      </Panel>
      {error && <Alert message={error} handleClose={clearErrorHandler} />}
    </div>
  );
}

export default TasksPage;
