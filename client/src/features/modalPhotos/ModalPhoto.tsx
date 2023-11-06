/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import type { Photo } from '../photoAlbum/type';
import './modalPhoto.css';

function ModalPhoto({
  active,
  setActive,
  foto,
}: {
  active: boolean;
  setActive: (active: boolean) => void;
  foto: Photo;
}): JSX.Element {
  return (
    <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
      <div
        className="modal__content"
        onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => e.stopPropagation()}
      >
        <div className="photo-item-high">
          <img src={foto.url} alt="img" />
          <button type="button" className="modal-btn">
            Удалить
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalPhoto;
