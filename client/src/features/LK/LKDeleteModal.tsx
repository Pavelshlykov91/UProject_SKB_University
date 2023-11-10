import React from 'react'
import { useAppDispatch } from '../../redux/store';
import { useNavigate } from 'react-router';
import { deleteEvent } from './reducers/LKSlice';
import { EventId } from './reducers/type';

export default function LKDeleteModal({setModal, modal, id}:{setModal: (active: boolean) => void, modal:boolean, id:EventId}) {
  const dispatch=useAppDispatch()
  const navigate = useNavigate();
  const onHandleDelete = async (): Promise<void> => {
    dispatch(deleteEvent(id));
    navigate('/myaccount');
    setModal(false);
  };
  return (
    <div className={modal ? 'LK_delete_event_modal active_delete' : '.LK_delete_event_modal'}>
      <div className={modal? 'LK_delete_event_modal_content active': 'LK_delete_event_modal_content'}>Вы уверены, что хотите удалить мероприятие?</div>
      <button className='LK_delete_event_modal_bttn' type="button" onClick={() => onHandleDelete()}>
          Удалить
        </button>
        <button className='LK_delete_event_modal_bttn' type="button" onClick={() => setModal(false)}>
          Отмена
        </button>
    </div>
  )
}
