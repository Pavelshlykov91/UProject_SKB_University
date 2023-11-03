import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../redux/store';
import PhotoAlbumItem from './PhotoAlbumItem';

export default function PhotosBlock(): JSX.Element {
  const albums = useSelector((store: RootState) => store.albums.albums);

  return (
    <div>
      {albums.map((album) => (
        <PhotoAlbumItem key={album.id} album={album} />
      ))}
    </div>
  );
}
