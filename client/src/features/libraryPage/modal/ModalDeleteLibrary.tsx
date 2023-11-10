/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../redux/store';
import { deleteMaterial } from '../reducer/librarySlice';
import './modalDeleteLibrary.css';

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
    <div className={active ? 'modal-library active-library' : 'modal-library'}>
      <div
        className="modal-library__content"
        onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => e.stopPropagation()}
      >
        <p>Вы точно хотите удалить статью?</p>
        <div className="modal-btns">
          <button
            className="LK_delete_event_modal_bttn"
            type="button"
            onClick={() => onHandleDeleteMaterial()}
          >
            Удалить
          </button>
          <button
            className="LK_delete_event_modal_bttn"
            type="button"
            onClick={() => setActive(!active)}
          >
            Отмена
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalDeleteLibrary;
