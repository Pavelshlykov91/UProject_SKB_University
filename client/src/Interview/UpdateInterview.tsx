/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/naming-convention */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import type { RootState} from '../redux/store';
import { useAppDispatch } from '../redux/store';
import {  updInterview } from './reducer/InterviewPageSlice';

export default function UpdateInterview({
  setUpd,
}: {
  setUpd: React.Dispatch<React.SetStateAction<boolean>>;
}): JSX.Element {
  const user_id = useSelector((store: RootState) => store.auth.user?.id);
  const interviews = useSelector((store: RootState) => store.interviews.interviews);
  const { interviewId } = useParams();

  const interview = interviews.find((int) => interviewId && int.id === +interviewId);

  const [title, setTitle] = useState(interview?.title);
  const [url, setUrl] = useState(interview?.url);
  const [content, setContent] = useState(interview?.content);
  const dispatch = useAppDispatch();

  const {id} = (interview!);

  const UpdateInterview: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if (user_id && title && url && content) {
      dispatch(updInterview({ title, url, content, user_id, id }));
      setUpd(false);
    }
  };

  // useEffect(() => {
  //   dispatch(loadInterview());
  // }, [UpdateInterview]);

  return (
    <div>
      <form className="form__add-interview" onSubmit={UpdateInterview}>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
        <input type="text" value={content} onChange={(e) => setContent(e.target.value)} />
        <button type="submit">Добавить</button>
      </form>
    </div>
  );
}
