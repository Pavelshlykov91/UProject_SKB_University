import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../redux/store';
import { Link, useParams } from 'react-router-dom';
// import InterviewComm from './InterviewComm';
import InterviewAddComm from './InterviewAddComm';
import { loadInterview, loadInterviewcomm } from './reducer/InterviewPageSlice';
import UpdateInterview from './UpdateInterview';

export default function InterviewItem(): JSX.Element {
  const { interviewId } = useParams();
  const user = useSelector((store: RootState) => store.auth.user);
  const interviews = useSelector((store: RootState) => store.interviews.interviews);
  const interview = interviews.find((int) => interviewId && int.id === +interviewId);
  const dispatch = useAppDispatch();
  const [upd, setUpd] = useState(false);
  useEffect(() => {
    if (interviewId) {
      dispatch(loadInterviewcomm(interview?.id));
      dispatch(loadInterview());
    }
  }, []);

  const error = <h1>Такого интервью мы пока не придумали</h1>;
  const contentpage = (
    <div className="interview_item_container">
      <div className='interview_item_blocks'>
      <div className='interview_item_body'>
      <div className='interview_item_card_edit'>
      <div className="interview_item_card">
        <div className="interview_img_cont">
          <img className="interview_img" src={interview?.url} />
        </div>
      </div>
      <div className='interview_item_card_headcontent'>
      {/* <div className='interview_item_card_head_container'> */}
        <div className="interview_item_card_head">{interview?.title}</div>
        {/* </div> */}
      <div className='interview_item_card_editcont'>
      {user && user.role === 'преподаватель' && (
        <div>
          <button className="interview_upd_bttn" onClick={(e) => setUpd((prev) => !prev)}>
            Редактировать интервью
          </button>
        </div>
      )}
      {user && user.role === 'преподаватель' && upd && interview && (
        <UpdateInterview key={interview?.id} />
      )}
      <div className='interview_item_card_content'>{interview?.content}</div>
      </div>
      </div>
      </div>
      <div>{/* <InterviewComm/> */}</div>
      <div>
        <InterviewAddComm key={interview?.id} />
      </div>
      </div>
      <div className='interview_item_card_list'>
        <h2 className='interview_item_card_list_head'>Интервью</h2>
        <ol>
          {interviews.map((int) => (
            <Link className='interview_item_card_list_item_link'to={`/interviews/${int.id}`}>
              <li className='interview_item_card_list_item'>{int.title}</li>
            </Link>
          ))}
        </ol>
      </div>
      </div>
    </div>
  );
  return <div>{!interview ? error : contentpage}</div>;
}
