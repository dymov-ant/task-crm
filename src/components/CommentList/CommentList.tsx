import React from "react";
import { Comment } from "../Comment";
import { ILifetimeItem } from "../../models/ITask";

interface CommentListProps {
  comments: ILifetimeItem[];
}

function CommentList({ comments }: CommentListProps) {
  return (
    <div>
      {/* eslint-disable-next-line react/jsx-props-no-spreading,react/destructuring-assignment */ }
      {comments.map((comment) => <Comment {...comment} />)}
    </div>
  );
}

export default CommentList;
