import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../redux/store';
import PhotoAlbumItem from './PhotoAlbumItem';
import type { Album } from './type';

export default function PhotosBlock(): JSX.Element {
  const albums = useSelector((store: RootState) => store.albums.albums);

  return (
    <div className="container__photoalbum">
      {albums.map((album: Album) => (
        <PhotoAlbumItem key={album.id} album={album} />
      ))}
    </div>
  );
}
