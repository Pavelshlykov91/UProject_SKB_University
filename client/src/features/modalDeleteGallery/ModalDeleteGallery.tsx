/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../redux/store';
import { deleteAlbum } from '../photoAlbum/reducer/albumsSlice';
import './modalDeleteGallery.css'

function ModalDelete({
  active,
  setActive,
  id,
}: {
  active: boolean;
  setActive: (active: boolean) => void;
  id: number;
}): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onHandleDelete = async (): Promise<void> => {
    dispatch(deleteAlbum(id));
    navigate('/gallery');
    setActive(!active);
  };

  return (
    <div className={active ? 'modal-gallery active-gallery' : 'modal-gallery'}>
      <div
        className="modal-gallery__content"
        onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => e.stopPropagation()}
      >
        <p>Вы точно хотите удалить весь альбом с его содержимым?</p>
        <button type="button" onClick={() => onHandleDelete()}>
          Удалить
        </button>
        <button type="button" onClick={() => setActive(!active)}>
          Отмена
        </button>
      </div>
    </div>
  );
}

export default ModalDelete;
