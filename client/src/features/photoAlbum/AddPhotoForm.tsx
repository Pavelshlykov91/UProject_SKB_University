/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useAppDispatch } from '../../redux/store';
import { addPhoto } from './reducer/albumsSlice';

export default function AddPhotoForm({ id }: { id: number }): JSX.Element {
  const [url, setUrl] = useState<FileList | null>(null);
  const dispatch = useAppDispatch();

  const onHandleSubmit: React.FormEventHandler<HTMLFormElement> = async (e): Promise<void> => {
    e.preventDefault();

    if (!url) {
      return;
    }
    const formData = new FormData();
    formData.append('id', String(id));
    for (let i = 0; i < url.length; i += 1) {
      formData.append('url', url[i]);
    }

    dispatch(addPhoto({ data: formData, id }));
    setUrl(null);
  };

  const onFileAdd: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.files) {
      setUrl(e.target.files);
    }
  };

  return (
    <form className="form__addphoto" onSubmit={onHandleSubmit}>
      <label>Загрузите изображение:</label>
      <input type="file" onChange={onFileAdd} multiple className="input-uploader" />
      {url && <button type="submit">Добавить фото</button>}
    </form>
  );
}
