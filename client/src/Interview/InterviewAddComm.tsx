import React, {useState, useEffect} from 'react'
import { RootState, useAppDispatch } from '../redux/store';
import { addInterviewcomm, loadInterviewcomm } from './reducer/InterviewPageSlice';
import {  useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { checkUser } from '../features/auth/authSlice';


export default function InterviewAddComm() {
  const { interviewId } = useParams();
  const dispatch=useAppDispatch()
  const [content, setContent] = useState('')
  const user = useSelector((store:RootState)=> store.auth.user)
  const addComment: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
      dispatch(addInterviewcomm({ content, interview_id: interviewId, User: user}));
      setContent('');
    ;
  };

  useEffect(() => {
    dispatch(loadInterviewcomm(interviewId))
    dispatch(checkUser())
    return () => {
    };
  }, [interviewId, content])
  return (
    <div><div className='interview_addcomment_form_container'>
    <form className='interview_addcomment_form' onSubmit={addComment}>
      <input value={content} className='intrview_comment' onChange={(e) => setContent(e.target.value)}/>
      <button type='submit'></button>
    </form>
</div></div>
  )
}
