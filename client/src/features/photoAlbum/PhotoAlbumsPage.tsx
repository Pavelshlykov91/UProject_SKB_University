import React from 'react';
// import { Link } from 'react-router-dom';
import HeaderBlock from './HeaderBlock';
import PhotosBlock from './PhotosBlock';

export default function PhotoAlbumsPage(): JSX.Element {
  return (
    <div className="container__album">
      <HeaderBlock />
      {/* <Link to="/albumsform">Создать альбом</Link> */}
      <PhotosBlock />
    </div>
  );
}
