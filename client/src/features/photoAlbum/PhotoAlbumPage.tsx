import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from '../../redux/store';
import AddPhotoForm from './AddPhotoForm';
import UpdAlbumForm from './UpdAlbumForm';
import ModalDelete from '../modalDelete/ModalDelete';

export default function PhotoAlbumPage(): JSX.Element {
  const { albumId } = useParams();
  const navigate = useNavigate();
  const [flag, setFlag] = useState(false);
  const [modalActive, setModalActive] = useState(false);

  const albums = useSelector((store: RootState) => store.albums.albums);

  const album = albums.find((elem) => albumId && elem.id === +albumId);

  const error = <h1>Такого альбома нет</h1>;

  const content = (
    <div className="photoalbum-page">
      <img src={album?.url} alt="img" />
      <h2>{album?.title}</h2>
      <p>{album?.content}</p>
      <button onClick={() => setFlag(!flag)} type="button">
        Изменить
      </button>
      {flag && <UpdAlbumForm />}
      {/* {album?.user_id === user} */}
      <button onClick={() => setModalActive(!modalActive)} type="button">
        Удалить
      </button>
      <ModalDelete active={modalActive} setActive={setModalActive} id={album?.id} />
      <AddPhotoForm />
      <button onClick={() => navigate(-1)} type="button">
        Назад к альбомам
      </button>
    </div>
  );

  return <div>{!album ? error : content}</div>;
}
