/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, {useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import type { RootState} from '../../redux/store';
import { useAppDispatch } from '../../redux/store'
import { loadInterviewcomm } from './reducer/InterviewPageSlice';
import { checkUser } from '../auth/authSlice';


export default function InterviewComm() {
  const { interviewId } = useParams();
  const dispatch=useAppDispatch()
  const comments = useSelector((store:RootState) => store.interviews.comments)
  console.log(11111, comments);
  
  useEffect(() => {
if (interviewId) {
  dispatch(loadInterviewcomm(+interviewId))
    dispatch(checkUser())
    return () => {
    };
}
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
