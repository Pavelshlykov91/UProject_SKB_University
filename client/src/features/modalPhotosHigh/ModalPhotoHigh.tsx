/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useSelector } from 'react-redux';
import type { Photo } from '../photoAlbum/type';
import { useAppDispatch, type RootState } from '../../redux/store';
import './modalPhotoHigh.css';
import { deletePhoto } from '../photoAlbum/reducer/albumsSlice';

function ModalPhoto({
  active,
  setActive,
  foto,
}: {
  active: boolean;
  setActive: (active: boolean) => void;
  foto: Photo;
}): JSX.Element {
  const user = useSelector((store: RootState) => store.auth.user);
  const dispatch = useAppDispatch();

  const onHandleDelete = async (): Promise<void> => {
    dispatch(deletePhoto(foto));
  };
  return (
    <div
      className={active ? 'modal-photo active-photo' : 'modal-photo'}
      onClick={() => setActive(false)}
    >
      <div
        className="modal-photo__content"
        onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => e.stopPropagation()}
      >
        <img src={foto.url} alt="img" />
        {(user?.id === foto.user_id || user?.role === 'преподаватель') && (
          <button onClick={() => onHandleDelete()} type="button" className="modal-photo-btn">
            Удалить
          </button>
        )}
      </div>
    </div>
  );
}

export default ModalPhoto;
