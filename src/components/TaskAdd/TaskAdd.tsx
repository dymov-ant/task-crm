import React from "react";
import cn from "classnames";
import { Textarea } from "../Textarea";
import { Button } from "../Button";
import styles from "./taskAdd.module.scss";

function TaskAdd() {
  return (
    <form className={styles.form}>
      <div className={styles.form__field}>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="name">Название</label>
        <Textarea
          className={styles.form__textarea}
          id="name"
        />
      </div>
      <div className={styles.form__field}>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="description">Описание</label>
        <Textarea
          className={cn(styles.form__textarea, styles["form__textarea--description"])}
          id="description"
        />
      </div>
      <Button>
        Сохранить
      </Button>
    </form>
  );
}

export default TaskAdd;
