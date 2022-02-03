import React, { ChangeEvent, useState } from "react";
import cn from "classnames";
import { Textarea } from "../Textarea";
import { Button } from "../Button";
import { InputErrorMessage } from "../InputErrorMessage";
import { useAppDispatch } from "../../hooks/redux";
import { CreateTaskPayload } from "../../models/ITask";
import { createTask } from "../../store/tasksSlice/actions";
import styles from "./taskAdd.module.scss";

function TaskAdd() {
  const dispatch = useAppDispatch();
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);
  const [description, setDescription] = useState("");
  const [descriptionError, setDescriptionError] = useState(false);

  const nameChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setName(e.target.value);
    if (name.trim() !== "") {
      setNameError(false);
    }
  };

  const descriptionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
    if (description.trim() !== "") {
      setDescriptionError(false);
    }
  };

  const onSubmit = () => {
    if (name.trim() === "") setNameError(true);
    if (description.trim() === "") setDescriptionError(true);

    if (name.trim() !== "" && description.trim() !== "") {
      const values: CreateTaskPayload = {
        name,
        description,
      };
      dispatch(createTask(values));
    }
  };

  return (
    <form className={styles.form}>
      <div className={styles.form__field}>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="name">Название</label>
        <Textarea
          className={styles.form__textarea}
          id="name"
          value={name}
          onChange={nameChange}
          error={nameError}
        />
        {nameError && <InputErrorMessage />}
      </div>
      <div className={styles.form__field}>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="description">Описание</label>
        <Textarea
          className={cn(styles.form__textarea, styles["form__textarea--description"])}
          id="description"
          value={description}
          onChange={descriptionChange}
          error={descriptionError}
        />
        {descriptionError && <InputErrorMessage />}
      </div>
      <Button onClick={onSubmit}>
        Сохранить
      </Button>
    </form>
  );
}

export default TaskAdd;
