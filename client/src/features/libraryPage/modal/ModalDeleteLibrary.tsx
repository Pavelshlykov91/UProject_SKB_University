import React from 'react';
import './modalDelete.css';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../redux/store'
import { deleteMaterial } from '../reducer/librarySlice'



function ModalDeleteLibrary({
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

  const onHandleDeleteMaterial = async (): Promise<void> => {
    dispatch(deleteMaterial(id));
    navigate('/library');
    setActive(!active);
  };

  return (
    <div className={active ? 'modal active' : 'modal'}>
      <div
        className="modal__content"
        onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => e.stopPropagation()}
      >
        <p>Вы точно хотите удалить Статью?</p>
        <button type="button" onClick={() => onHandleDeleteMaterial()}>
          Удалить
        </button>
        <button type="button" onClick={() => setActive(!active)}>
          Отмена
        </button>
      </div>
    </div>
  );
}

export default ModalDeleteLibrary;
