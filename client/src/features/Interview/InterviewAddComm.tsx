/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState} from '../../redux/store';
import { useAppDispatch } from '../../redux/store';
import { addInterviewcomm, loadInterviewcomm } from './reducer/InterviewPageSlice';
import { checkUser } from '../auth/authSlice';

export default function InterviewAddComm() {
  const dispatch = useAppDispatch();
  const [content, setContent] = useState('');
  
  const { interviewId } = useParams();
  const comments = useSelector((store: RootState) => store.interviews.comments);
  useEffect(() => {
    if (interviewId) {
      dispatch(loadInterviewcomm(+interviewId));
      dispatch(checkUser());
      return () => {};
    }
  }, [interviewId]);
  const user = useSelector((store: RootState) => store.auth.user);
  const addComment: React.FormEventHandler<HTMLFormElement> = async (e) => {
    if (interviewId && user) {
      e.preventDefault();
      dispatch(
        addInterviewcomm({ content, interview_id: interviewId, user_id: user.id, User: user }),
      );
      setContent('');
    }
  };

  useEffect(() => {
    if (interviewId) {
      dispatch(loadInterviewcomm(+interviewId));
      dispatch(checkUser());
      return () => {};
    }
  }, []);
  return (
    <>
      <div>
        {comments?.map((comm) => (
          <div key={comm.id} className="interview_comment_container">
            <div className="interview_comment_container_user">
              {comm.User?.firstName} {comm.User?.lastName}
            </div>
            <div className="interview_comment_container_content">{comm.content}</div>
          </div>
        ))}
      </div>
      <div>
        <div className="interview_addcomment_form_container">
          <form className="interview_addcomment_form" onSubmit={addComment}>
            <input
              value={content}
              className="intrview_comment"
              onChange={(e) => setContent(e.target.value)}
            />
            <button type="submit" />
          </form>
        </div>
      </div>
    </>
  );
}
