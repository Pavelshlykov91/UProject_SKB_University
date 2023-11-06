import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';
import  { RootState, useAppDispatch} from '../redux/store';
import { Link, useParams } from 'react-router-dom';
import InterviewComm from './InterviewComm';
import InterviewAddComm from './InterviewAddComm';
import { loadInterviewcomm } from './reducer/InterviewPageSlice';


export default function InterviewItem(): JSX.Element {
  const { interviewId } = useParams();
  const interviews = useSelector((store: RootState) => store.interviews.interviews);
  const interview = interviews.find((int) => (interviewId && int.id === +interviewId));
  const dispatch=useAppDispatch()

  useEffect(() => {

    if (interviewId) {
      dispatch(loadInterviewcomm(interviewId));
    }
  }, []);

  
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
      <div>
        <InterviewComm/>
      </div>
      <div>
        <InterviewAddComm/>
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
