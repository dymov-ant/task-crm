import React, { useEffect, useState } from "react";
import { TaskList } from "../../components/TaskList";
import { useAppDispatch, useTypeSelector } from "../../hooks/redux";
import { Panel } from "../../components/Panel";
import { TaskEdit } from "../../components/TaskEdit";
import { formatId } from "../../helpers";
import { Button } from "../../components/Button";
import { TaskAdd } from "../../components/TaskAdd";
import { setCurrentTask } from "../../store/tasksSlice/reducer";

function TasksPage() {
  const dispatch = useAppDispatch();
  const { currentTask } = useTypeSelector((state) => state.tasksReducer);
  const [editPanelOpen, setEditPanelOpen] = useState(false);
  const [addPanelOpen, setAddPanelOpen] = useState(false);

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

  return (
    <div className="page">
      <div className="page__header">
        <Button size="big" onClick={openAddPanel}>Создать заявку</Button>
      </div>
      <div>
        <TaskList />
      </div>
      { currentTask && (
        <Panel
          title={`№ ${formatId(currentTask.id)}`}
          subTitle={currentTask.name}
          open={editPanelOpen}
          handleClose={closeEditPanel}
        >
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <TaskEdit {...currentTask} />
        </Panel>
      )}
      <Panel title="Новая заявка" open={addPanelOpen} handleClose={closeAddPanel}>
        <TaskAdd />
      </Panel>
    </div>
  );
}

export default TasksPage;
