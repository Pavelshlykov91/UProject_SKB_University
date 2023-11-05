import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import type { RootState } from '../../redux/store';
import { updateAlbum } from './reducer/albumsSlice';

export default function UpdAlbumForm({
  flag,
  setFlag,
}: {
  flag: boolean;
  setFlag: (active: boolean) => {};
}): JSX.Element {
  const dispatch = useDispatch();
  const { albumId } = useParams();
  const albums = useSelector((store: RootState) => store.albums.albums);
  const album = albums.find((elem) => albumId && elem.id === +albumId);

  const [title, setTitle] = useState(album?.title);
  const [content, setContent] = useState(album?.content);
  const [url, setUrl] = useState(album?.url);

  const onHandleUpd: React.FormEventHandler<HTMLFormElement> = async (e): Promise<void> => {
    e.preventDefault();
    dispatch(updateAlbum({ id: album?.id, title, url, content }));
    setFlag(!flag);
  };

  return (
    <form className="form__updalbum" onSubmit={onHandleUpd}>
      <input value={title} type="text" onChange={(e) => setTitle(e.target.value)} />
      <input value={content} type="text" onChange={(e) => setContent(e.target.value)} />
      <input value={url} type="text" onChange={(e) => setUrl(e.target.value)} />
      <button type="submit">Изменить</button>
    </form>
  );
}
