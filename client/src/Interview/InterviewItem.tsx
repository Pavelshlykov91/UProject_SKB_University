import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import  { RootState, useAppDispatch } from '../redux/store';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { addInterviewcomm, loadInterviewcomm } from './reducer/InterviewPageSlice';
import { checkUser } from '../features/auth/authSlice';


export default function InterviewItem(): JSX.Element {

  const interviews = useSelector((store: RootState) => store.interviews.interviews);
  const { interviewId } = useParams();
  const interview = interviews.find((int) => (interviewId && int.id === +interviewId));
  const dispatch=useAppDispatch()
  const comments = useSelector((store:RootState) => store.interviews.comments)
  useEffect(() => {
    dispatch(loadInterviewcomm(interviewId))
    dispatch(checkUser())
    return () => {
    };
  }, [interview])
  
  const user = useSelector((store:RootState)=> store.auth.user)
  // const comment = comments.find((comm) => comm.)
  const [content, setContent] = useState('')
  const addComment: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
      dispatch(addInterviewcomm({ content, interview_id: interviewId, User: user}));
      setContent('');
    ;
  };
  const error = <h1>Такого интервью мы пока не придумали</h1>;
  const contentpage = (
    <div>
      <div>
        <div className="interview_img_cont">
          <img src={interview?.url} />
        </div>
        <div>{interview?.title}</div>
        <div>{interview?.content}</div>
      </div>
      {comments?.map((comm) => (
        <div key={comm.id} className='interview_comment_container'> 
          <div className='interview_comment_container_user'>{comm.User?.firstName} {comm.User?.lastName}</div>
          <div className='interview_comment_container_content'>{comm.content}</div>
      </div>
      ))}
      <div className='interview_addcomment_form_container'>
          <form className='interview_addcomment_form' onSubmit={addComment}>
            <input value={content} className='intrview_comment' onChange={(e) => setContent(e.target.value)}/>
            <button type='submit'></button>
          </form>
      </div>
      <div>
        <ol>
          {interviews.map((int) => (
            <Link to={`/interviews/${int.id}`}>
             <li >{int.title}</li>
             </Link>
          ))}
        </ol>
      </div>
    </div>
  );
  return <div>{!interview ? error : contentpage}</div>;
}
