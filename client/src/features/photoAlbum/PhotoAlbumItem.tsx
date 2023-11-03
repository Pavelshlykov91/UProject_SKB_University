import React from 'react';
import { Link } from 'react-router-dom';
import type { Album } from './type';

export default function PhotoAlbumItem({ album }: { album: Album }): JSX.Element {
  return (
    <div className="photoalbum-item">
      <img src={album.url} alt="img" />
      <h2>{album.title}</h2>
      <p>{album.content}</p>
      <button type="button">
        <Link to={`/gallery/${album.id}`}>Посмотреть альбом</Link>
      </button>
    </div>
  );
}
