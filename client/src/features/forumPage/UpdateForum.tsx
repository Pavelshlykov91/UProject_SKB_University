import React, { useState } from 'react';
import { RootState, useAppDispatch } from '../../redux/store';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { updateForum } from './reducer/forumSlice'

const UpdateForum = ({
  flag,
  setFlag,
}: {
  flag: boolean;
  setFlag: (active: boolean) => void;
}): JSX.Element => {
  const dispatch = useAppDispatch();
  const { forumId } = useParams();

  const forums = useSelector((store: RootState) => store.forums.forums);
  const forum = forums.find((elem) => forumId && elem.id === +forumId);

  const [title, setTitle] = useState(forum?.title);
  const [content, setContent] = useState(forum?.content);


  const onHandleForumUpdate: React.FormEventHandler<HTMLFormElement> = async (e): Promise<void> => {
    e.preventDefault();
if(forum && forum.id && title && content){
  dispatch(updateForum({ id: forum.id, title, content}));
  setFlag(!flag);
}

  };

  return (
    <form className="form__update" onSubmit={onHandleForumUpdate}>
      <input value={title} type="text" onChange={(e) => setTitle(e.target.value)} />
      <input value={content} type="text" onChange={(e) => setContent(e.target.value)} />
      <button type="submit">Изменить</button>
    </form>
  );
};

export default UpdateForum;
