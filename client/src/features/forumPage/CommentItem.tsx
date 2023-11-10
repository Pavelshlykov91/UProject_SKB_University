import React from 'react';
import type { ForumAnswer } from './type';

export default function CommentItem({ comment }: { comment: ForumAnswer }): JSX.Element {

  
  return(
    <div className="comment-item">
      <h2>{comment.content}</h2>
    </div>
    ) 
}
