import React from 'react';
import HeaderBlock from './HeaderBlock';
import AddPhotoForm from './AddPhotoForm';
import PhotosBlock from './PhotosBlock';

export default function PhotoAlbumsPage(): JSX.Element {
  return (
    <div className="container__album">
      <HeaderBlock />
      <AddPhotoForm />
      <PhotosBlock />
    </div>
  );
}
