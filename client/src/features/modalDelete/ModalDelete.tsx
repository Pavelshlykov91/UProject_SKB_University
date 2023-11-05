import React from 'react';
// import { useSelector } from 'react-redux';
import './modalDelete.css';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../redux/store';
import { deleteAlbum } from '../photoAlbum/reducer/albumsSlice';

function ModalDelete({
  active,
  setActive,
  id,
}: {
  active: boolean;
  setActive: (active: boolean) => {};
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
    <div className={active ? 'modal active' : 'modal'}>
      <div
        className="modal__content"
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
