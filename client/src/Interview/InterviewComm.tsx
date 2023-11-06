import React, {useEffect} from 'react'
import { useSelector } from 'react-redux'
import { RootState, useAppDispatch } from '../redux/store'
import { useParams } from 'react-router-dom';
import { loadInterviewcomm } from './reducer/InterviewPageSlice';
import { checkUser } from '../features/auth/authSlice';


export default function InterviewComm() {
  const { interviewId } = useParams();
  const dispatch=useAppDispatch()
  const comments = useSelector((store:RootState) => store.interviews.comments)
  useEffect(() => {
    dispatch(loadInterviewcomm(interviewId))
    dispatch(checkUser())
    return () => {
    };
  }, [interviewId])
  return (
    <div>{comments?.map((comm) => (
      <div key={comm.id} className='interview_comment_container'> 
        <div className='interview_comment_container_user'>{comm.User?.firstName} {comm.User?.lastName}</div>
        <div className='interview_comment_container_content'>{comm.content}</div>
    </div>
    ))}</div>
  )
}
