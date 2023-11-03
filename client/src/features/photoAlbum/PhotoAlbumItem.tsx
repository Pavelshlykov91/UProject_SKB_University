import React from 'react';
import type { Album } from './type';

export default function PhotoAlbumItem({ album }: { album: Album }): JSX.Element {
  return (
    <div className="photoalbum-item">
      <img src={album.url} alt="img" />
      <h2>{album.title}</h2>
      <p>{album.content}</p>
      <button type="button">Подробнее</button>
    </div>
  );
}
