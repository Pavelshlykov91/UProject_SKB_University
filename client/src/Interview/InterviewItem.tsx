import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


export default function InterviewItem(): JSX.Element {
  const interviews = useSelector((store: RootState) => store.interviews.interviews);
  const { interviewId } = useParams();
  const interview = interviews.find((int) => (interviewId && int.id === +interviewId));
  const error = <h1>Такого интервью мы пока не придумали</h1>;
  const content = (
    <div>
      <div>
        <div className="interview_img_cont">
          <img src={interview?.url} />
        </div>
        <div>{interview?.title}</div>
        <div>{interview?.content}</div>
      </div>
      <div>
        <ol>
          {interviews.map((int) => (
            <Link to={`/interviews/${int.id}`}>
             <li key={int.id}>{int.title}</li>
             </Link>
          ))}
        </ol>
      </div>
    </div>
  );
  return <div>{!interview ? error : content}</div>;
}
