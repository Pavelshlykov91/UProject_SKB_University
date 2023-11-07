import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../redux/store';
import { loadInterview, updInterview } from './reducer/InterviewPageSlice';
import { useParams } from 'react-router-dom';

export default function UpdateInterview(): JSX.Element {
  const user_id = useSelector((store: RootState) => store.auth.user?.id);
  const interviews = useSelector((store: RootState) => store.interviews.interviews);
  const { interviewId } = useParams();

  const interview = interviews.find((int) => interviewId && int.id === +interviewId);

  const [title, setTitle] = useState(interview?.title);
  const [url, setUrl] = useState(interview?.url);
  const [content, setContent] = useState(interview?.content);
  const dispatch = useAppDispatch();

  const id = interview!.id;

  const UpdateInterview: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if (user_id && title && url && content) {
      dispatch(updInterview({ title, url, content, user_id, id }));
      setTitle('');
      setUrl('');
      setContent('');
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
