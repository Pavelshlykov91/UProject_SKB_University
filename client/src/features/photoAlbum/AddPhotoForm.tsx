import React, { useState } from 'react';
import { useAppDispatch } from '../../redux/store';
import { addPhoto } from './reducer/albumsSlice';

export default function AddPhotoForm({ id }: { id: number }): JSX.Element {
  const [url, setUrl] = useState('');
  const dispatch = useAppDispatch();

  const onHandleSubmit: React.FormEventHandler<HTMLFormElement> = async (e): Promise<void> => {
    e.preventDefault();
    dispatch(addPhoto({ id, url, gallery_id: id }));
    setUrl('');
  };
  return (
    <form className="form__addphoto" onSubmit={onHandleSubmit}>
      <input
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        type="text"
        placeholder="Ссылка на фото"
      />
      <button type="submit">Добавить фото</button>
    </form>
  );
}
