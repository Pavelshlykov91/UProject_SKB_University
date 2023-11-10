import React, { useState } from 'react'
import { RootState, useAppDispatch } from '../redux/store';
import { addInterview } from './reducer/InterviewPageSlice';
import { useSelector } from 'react-redux';

export default function AddInterviewVideo() {
  const [title, setTitle] = useState('');
  const [url1, setUrl] = useState('');
  // const [video, setVideo] = useState('')
  const [content, setContent] = useState(``);
  const dispatch = useAppDispatch();
  const user_id = useSelector((store: RootState) => (store.auth.user ? store.auth.user.id : 1));

  const extractVideoId = (url: string): string | null => {
    const regexPattern = /\/embed\/([^?]+)/;
    
    const match = regexPattern.exec(url);
    
    return match ? match[1] : null;
  };
  
  
  
  

  const onHandleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const url:string|null = extractVideoId(url1)
    if (url) {
      dispatch(addInterview({ title, url, content, user_id }));
      setTitle('');
      setUrl('');
      setContent('');
    }
  };
  return (
    <div><form className="form__add-interview" onSubmit={onHandleSubmit}>
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
      value={url1}
      onChange={(e) => setUrl(`${e.target.value}`)}
    />
    <input
      placeholder="Содержание"
      className="interview_add_input_title"
      type="text"
      value={content}
      onChange={(e) => setContent(e.target.value)}
    />
    {/* <input
      placeholder="Ссылка на видео в YouTube"
      className="interview_add_input_video"
      type="text"
      value={video}
      onChange={(e) => setVideo(e.target.value)}
    /> */}
    {title && content && url1 && (
      <button className="interview_add_butt" type="submit">
        Добавить
      </button>
    )}
  </form></div>
  )
}
