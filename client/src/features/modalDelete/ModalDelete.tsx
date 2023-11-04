import React from 'react';
// import { useSelector } from 'react-redux';
import './modalDelete.css';
import { useAppDispatch } from '../../redux/store';
import { deleteAlbum } from '../photoAlbum/reducer/albumsSlice';
import { useNavigate } from 'react-router-dom';

function ModalDelete({
  active,
  setActive,
  id,
}: {
  active: boolean;
  setActive: () => {};
  id: number;
}): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onHandleDelete = async (e): Promise<void> => {
    dispatch(deleteAlbum(id));
    navigate('/gallery');
    setActive(!active);
  };

  return (
    <div className={active ? 'modal active' : 'modal'}>
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <p>Вы точно хотите удалить весь альбом с его содержимым?</p>
        <button type="button" onClick={(e) => onHandleDelete(e)}>
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
