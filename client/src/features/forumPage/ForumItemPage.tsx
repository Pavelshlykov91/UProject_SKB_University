import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, type RootState } from '../../redux/store';
import { deleteForum } from './reducer/forumSlice';
import UpdateForum from './UpdateForum'
import CommentList from './CommentList'


const ForumItemPage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { forumId } = useParams();
  const navigate = useNavigate();
  const [flag, setFlag] = useState(false);

  const forums = useSelector((store: RootState) => store.forums.forums);
  const forum = forums.find((elem) => forumId && elem.id === +forumId);
  const user = useSelector((store: RootState) => store.auth.user);

  const onHandleDeleteForum = async (id: number | undefined): Promise<void> => {
    dispatch(deleteForum(id));
    navigate('/forum');
  };

  const error = <h1>Такой темы нет</h1>;

  const content = forum && (
    <div className="forum-page">
      <div className="forum-content">
        <div className="book-text-page">
          <h2>{forum?.title}</h2>
          <p>{forum?.content}</p>
<CommentList/>
        </div>
      </div>
      <div className="forum-btn">
        {(user?.id === forum?.user_id || user?.role === 'преподаватель') && (
          <div className="library-btns">
            <button onClick={() => setFlag(!flag)} type="button">
              Изменить
            </button>
            {flag && <UpdateForum flag={flag} setFlag={setFlag} />}
            <button onClick={() => onHandleDeleteForum(forum.id)} type="button">
              Удалить
            </button>
          </div>
        )}
        <button type="button" onClick={() => navigate(-1)}>
          &#10094; Назад в Библиотеку
        </button>
      </div>
    </div>
  );

  return <div>{!forum ? error : content}</div>;
};

export default ForumItemPage;
