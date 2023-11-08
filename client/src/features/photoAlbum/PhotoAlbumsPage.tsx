import React, { useState } from 'react';
import HeaderBlock from './HeaderBlock';
import PhotosBlock from './PhotosBlock';
import AddAlbumsForm from './AddAlbumsForm';

export default function PhotoAlbumsPage(): JSX.Element {
  const [flag, setFlag] = useState(false);

  return (
    <div className="container__gallery">
      <HeaderBlock />
      <button onClick={() => setFlag(!flag)} type="button">
        Добавить альбом
      </button>
      {flag && <AddAlbumsForm flag={flag} setFlag={setFlag} />}
      <PhotosBlock />
    </div>
  );
}
