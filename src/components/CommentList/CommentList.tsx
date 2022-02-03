import React from "react";
import { Comment } from "../Comment";
import { ILifetimeItem } from "../../models/ITask";

interface CommentListProps {
  comments: ILifetimeItem[];
}

function CommentList({ comments }: CommentListProps) {
  return (
    <div>
      {comments.map((comment) => comment.comment && <Comment key={comment.id} {...comment} />)}
    </div>
  );
}

export default CommentList;
