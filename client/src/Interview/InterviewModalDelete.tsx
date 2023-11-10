import React from 'react'
import { useNavigate } from 'react-router';
import { InterviewId } from './reducer/type';
import { deleteInterview } from './reducer/InterviewPageSlice';
import { useAppDispatch } from '../redux/store';

export default function InterviewModalDelete({setDel, del, id}:{setDel: (active: boolean) => void, del:boolean, id:InterviewId}) {
  const dispatch=useAppDispatch()
  const navigate = useNavigate();
  const onHandleDelete = async (): Promise<void> => {
    dispatch(deleteInterview(id));
    navigate('/interviews');
    setDel(false);
  };
  return (
    <div className={del ? 'LK_delete_event_modal active_delete' : '.LK_delete_event_modal'}>
      <div className={del? 'LK_delete_event_modal_content active': 'LK_delete_event_modal_content'}>Вы уверены, что хотите удалить это интервью?</div>
      <button className='LK_delete_event_modal_bttn' type="button" onClick={() => onHandleDelete()}>
          Удалить
        </button>
        <button className='LK_delete_event_modal_bttn' type="button" onClick={() => setDel(false)}>
          Отмена
        </button>
    </div>
  )
}
