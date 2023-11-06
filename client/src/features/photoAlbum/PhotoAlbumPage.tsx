/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from '../../redux/store';
import AddPhotoForm from './AddPhotoForm';
import UpdAlbumForm from './UpdAlbumForm';
import ModalDelete from '../modalDelete/ModalDelete';
import ModalPhoto from '../modalPhotos/ModalPhoto';
import './styles/style.css';
import PhotoItem from './PhotoItem';

export default function PhotoAlbumPage(): JSX.Element {
  const { albumId } = useParams();
  const navigate = useNavigate();

  const [flag, setFlag] = useState(false);
  const [modalActive, setModalActive] = useState(false);

  const albums = useSelector((store: RootState) => store.albums.albums);
  const user = useSelector((store: RootState) => store.auth.user);
  const album = albums.find((albumEl) => albumId && albumEl.id === +albumId);
  const error = <h1>Такого альбома нет</h1>;

  const content = album && (
    <div className="photoalbum-page">
      <div className="photoalbum-page-content">
        <img src={album?.url} alt="img" />
        <div className="photoalbum-page-text">
          <h2>{album?.title}</h2>
          <p>{album?.content}</p>
        </div>
      </div>
      {(user?.id === album?.user_id || user?.role === 'преподаватель') && (
        <div className="album-btns">
          <button onClick={() => setFlag(!flag)} type="button">
            Изменить
          </button>
          {flag && <UpdAlbumForm flag={flag} setFlag={setFlag} />}
          <button onClick={() => setModalActive(!modalActive)} type="button">
            Удалить
          </button>
          <ModalDelete active={modalActive} setActive={setModalActive} id={album.id} />
        </div>
      )}
      <AddPhotoForm id={album.id} />
      <button onClick={() => navigate(-1)} type="button">
        Назад к альбомам
      </button>
      <div className="photoalbum-page-photo">{album.Fotos?.map((foto) => <PhotoItem key={foto.id} foto={foto}/>)}</div>
    </div>
  );

  return <div>{!album ? error : content}</div>;
}
