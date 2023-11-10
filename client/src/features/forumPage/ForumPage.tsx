import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../redux/store';
import './style/forum.css';
import ForumItem from './ForumItem';
import AddForumForm from './AddForumForm'

const ForumPage = (): JSX.Element => {
  const forums = useSelector((store: RootState) => store.forums.forums);
  const [flag, setFlag] = useState(false);


  return (
    <div className="container--forum">
      <button onClick={() => setFlag(!flag)} type="button">
        Добавить Тему
      </button>
      <div className="container-forum-page">
        {flag && <AddForumForm/>}
        {forums.map((forum) => (
          <ForumItem key={forum.id} forum={forum} />
        ))}
      </div>
    </div>
  );
};

export default ForumPage;
