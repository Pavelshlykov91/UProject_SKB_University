import React, { useState } from 'react';
import { addInterview } from './reducer/InterviewPageSlice';
import { RootState, useAppDispatch } from '../redux/store';
import { useSelector } from 'react-redux';
import AddInterviewVideo from './AddInterviewVideo';

function AddInterview(): JSX.Element {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [content, setContent] = useState(``);
  const [vtype, setVtype] = useState(false)
  const dispatch = useAppDispatch();
  const user_id = useSelector((store: RootState) => (store.auth.user ? store.auth.user.id : 1));
  const onHandleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    console.log(content);

    dispatch(addInterview({ title, url, content, user_id }));
    setTitle('');
    setUrl('');
    setContent('');
  };

  return (
    <div className="interview-add_cont">
      <div className="interview-add_head">Добавить новое интервью</div>
      <div className='interview-add-selector'><div className='interview-add-select-text' onClick={()=> setVtype(false)}>Текстовое</div>
      <div className='interview-add-select-text' onClick={()=> setVtype(true)}>Видео</div></div>
    
      {vtype? <AddInterviewVideo/> :
      <form className="form__add-interview" onSubmit={onHandleSubmit}>
        <input
          placeholder="Название"
          className="interview_add_input_title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          placeholder="Ссылка на изображение"
          className="interview_add_input_title"
          type="text"
          value={url}
          onChange={(e) => setUrl(`${e.target.value}`)}
        />
        <input
          placeholder="Содержание"
          className="interview_add_input_title"
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        {title && content && url && (
          <button className="interview_add_butt" type="submit">
            Добавить
          </button>
        )}
      </form>}
    </div>
  );
}

export default AddInterview;
