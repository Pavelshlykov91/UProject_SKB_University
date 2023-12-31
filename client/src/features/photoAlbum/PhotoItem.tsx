/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import ModalPhotoHigh from '../modalPhotosHigh/ModalPhotoHigh';
import type { Photo } from './type';

export default function PhotoItem({ foto }: { foto: Photo }): JSX.Element {
  const [modalActive, setModalActive] = useState(false);

  return (
    <div className="photo-item" onClick={() => setModalActive(!modalActive)}>
      <img src={foto.url} alt="img" />
      <ModalPhotoHigh active={modalActive} setActive={setModalActive} foto={foto} />
    </div>
  );
}
