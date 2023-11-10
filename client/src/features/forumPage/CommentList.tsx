import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../redux/store';
import CommentItem from './CommentItem';

const CommentList = (): JSX.Element => {
  const comments = useSelector((store: RootState) => store.comments.comments);

  
  return (
    <div>
      {comments.map((comment) => (
        <CommentItem key={comment.id} comment={comment} />
      ))} 
    </div>
  );
};

export default CommentList;
