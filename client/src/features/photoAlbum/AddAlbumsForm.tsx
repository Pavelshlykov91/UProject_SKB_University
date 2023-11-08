import React, { useState } from 'react';
import { addAlbum } from './reducer/albumsSlice';
import { useAppDispatch } from '../../redux/store';

export default function AddAlbumsForm({
  flag,
  setFlag,
}: {
  flag: boolean;
  setFlag: (active: boolean) => void;
}): JSX.Element {
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [url, setUrl] = useState<File | null>(null);

  const onHandleSubmit: React.FormEventHandler<HTMLFormElement> = async (e): Promise<void> => {
    e.preventDefault();

    if (!url) {
      alert('Загрузите картинку');
      return;
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('url', url);

    dispatch(addAlbum(formData));
    setTitle('');
    setContent('');
    setUrl(null);
    setFlag(!flag);
  };

  const onFileChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.files) {
      setUrl(e.target.files[0]);
    }
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
        <input type="file" onChange={onFileChange} className="input-uploader" />
        <button type="submit">Создать</button>
      </form>
    </div>
  );
}
