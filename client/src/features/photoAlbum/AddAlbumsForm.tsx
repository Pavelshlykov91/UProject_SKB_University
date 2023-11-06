import React, { useState } from 'react';
import { addAlbum } from './reducer/albumsSlice';
import { useAppDispatch } from '../../redux/store';

export default function AddAlbumsForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [url, setUrl] = useState('');

  const onHandleSubmit: React.FormEventHandler<HTMLFormElement> = async (e): Promise<void> => {
    e.preventDefault();
    dispatch(addAlbum({ title, content, url }));
    setTitle('');
    setContent('');
    setUrl('');
  };

  return (
    <div className="form-add__container">
      <form className="form__add-album" onSubmit={onHandleSubmit}>
        <input
          value={title}
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Название альбома"
        />
        <input
          value={content}
          type="text"
          onChange={(e) => setContent(e.target.value)}
          placeholder="Описание альбома"
        />
        <input
          value={url}
          type="text"
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Обложка альбома"
        />
        <button type="submit">Создать</button>
      </form>
    </div>
  );
}
