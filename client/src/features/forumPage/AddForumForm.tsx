import React, { useState } from 'react';
import { useAppDispatch } from '../../redux/store';
import { addForum } from './reducer/forumSlice';

const AddForumForm = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [img, setImg] = useState('');


  const onHandelFormAdd = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    dispatch(addForum({ title, content, img }));

    setTitle('');
    setContent('');
    setImg('');
  };

  return (
    <div className="formAdd__container">
      <form onSubmit={onHandelFormAdd}>
        <label htmlFor="a">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Название"
          />
        </label>
        <label htmlFor="b">
          <input
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Контент"
            type="text"
          />
        </label>
        <label htmlFor="c">
          <input
            value={img}
            onChange={(e) => setImg(e.target.value)}
            placeholder="Картинка"
            type="text"
          />
        </label>
        <button type="submit">Добавить</button>
      </form>
    </div>
  );
};

export default AddForumForm;
