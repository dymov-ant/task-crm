import React from "react";
import styles from "./tag.module.scss";
import { ITag } from "../../models/ITask";

interface TagProps {
  tag: ITag;
}

function Tag({ tag }: TagProps) {
  return (
    <span className={styles.tag}>
      {tag.name}
    </span>
  );
}

export default Tag;
