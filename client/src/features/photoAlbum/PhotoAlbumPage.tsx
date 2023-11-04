import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from '../../redux/store';

export default function PhotoAlbumPage(): JSX.Element {
  const { albumId } = useParams();
  const navigate = useNavigate();
 
  const albums = useSelector((store: RootState) => store.albums.albums);

  const album = albums.find((elem) => albumId && elem.id === +albumId);

  const error = <h1>Такого альбома нет</h1>;

  const content = (
    <div className="album-page">
      <img src={album?.url} alt="img" />
      <h2>{album?.title}</h2>
      <p>{album?.content}</p>
      <button onClick={() => navigate(-1)} type="button">
        Назад к альбомам
      </button>
    </div>
  );

  return <div>{!album ? error : content}</div>;
}
