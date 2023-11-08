/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React from 'react';
import { Link } from 'react-router-dom';
import type { Album } from './type';
import './styles/style.css';

export default function PhotoAlbumItem({ album }: { album: Album }): JSX.Element {
  return (
    <div>
      <Link to={`/gallery/${album.id}`}>
        <div className="photoalbum-item">
          <img src={album.url} alt="img" />
          <div className="photoalbum-item-content">
            <div className="photoalbum-item-text">
              <h2>{album.title}</h2>
              <p>{album.content}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
