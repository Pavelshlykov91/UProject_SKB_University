import React, { useState } from 'react'
import { addInterview } from './reducer/InterviewPageSlice';
import { useAppDispatch } from '../redux/store';

 function AddInterview():JSX.Element {
  const [title, setTitle]=useState('')
  const [url, setUrl]=useState('')
  const [content, setContent]=useState('')
  const dispatch = useAppDispatch()

  const onHandleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
      dispatch(addInterview({ title, url, content }));
      setTitle('');
      setUrl('');
      setContent('')
    ;
  };

  return (
    <div className='interview-add_cont'>
      <form className="form__add-interview" onSubmit={onHandleSubmit}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
      <input type="text" value={url} onChange={(e) => setUrl(e.target.value)}/>
      <input type="text" value={content} onChange={(e) => setContent(e.target.value)}/>
      <button type="submit">Добавить</button>
      </form>
    </div>
  )
}

export default AddInterview