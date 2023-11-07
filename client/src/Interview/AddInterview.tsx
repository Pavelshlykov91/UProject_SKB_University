import React, { useState } from 'react'
import { addInterview } from './reducer/InterviewPageSlice';
import { RootState, useAppDispatch } from '../redux/store';
import { useSelector } from 'react-redux';

 function AddInterview():JSX.Element {
  const [title, setTitle]=useState('')
  const [url, setUrl]=useState('')
  const [content, setContent]=useState('')
  const dispatch = useAppDispatch()
  const user_id = useSelector((store:RootState)=> store.auth.user? store.auth.user.id:1)
  const onHandleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
      dispatch(addInterview({ title, url, content, user_id }));
      setTitle('');
      setUrl('');
      setContent('')
    ;
  };

  return (
    <div className='interview-add_cont'>
      <div className='interview-add_head'>Добавить новое интервью</div>
      <form className="form__add-interview" onSubmit={onHandleSubmit}>
      <input placeholder='Название'className='interview_add_input_title' type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
      <input placeholder='Ссылка на изображение'className='interview_add_input_title' type="text" value={url} onChange={(e) => setUrl(e.target.value)}/>
      <input placeholder='Содержание'className='interview_add_input_title' type="text" value={content} onChange={(e) => setContent(e.target.value)}/>
      <button className='interview_add_butt' type="submit">Добавить</button>
      </form>
    </div>
  )
}

export default AddInterview