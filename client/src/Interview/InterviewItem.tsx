import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../redux/store';
import { Link, useParams } from 'react-router-dom';
// import InterviewComm from './InterviewComm';
import InterviewAddComm from './InterviewAddComm';
import { loadInterview, loadInterviewcomm, loadReactions } from './reducer/InterviewPageSlice';
import UpdateInterview from './UpdateInterview';
import InterviewReactions from './InterviewReactions';

export default function InterviewItem(): JSX.Element {
  const { interviewId } = useParams();
  const user = useSelector((store: RootState) => store.auth.user);
  const interviews = useSelector((store: RootState) => store.interviews.interviews);
  const interview = interviews.find((int) => interviewId && int.id === +interviewId);
  const dispatch = useAppDispatch();
  const [upd, setUpd] = useState(false);
  // const [reaction, setReaction] = useState('');

  useEffect(() => {
    if (interviewId) {
      dispatch(loadReactions());
      dispatch(loadInterviewcomm(interview?.id));
      dispatch(loadInterview());
    }
  }, []);

  const reactions = useSelector((store: RootState) => store.interviews.reactions);

  // const reaction1 = reactions.find((el)=> el.interview_id===interview?.id);
  console.log(111122223333, reactions);

  const onHandleChangeReaction = () => {
    
  };

  const error = <h1>Такого интервью мы пока не придумали</h1>;
  const contentpage = (
    <div className="interview_item_container">
      <div className="interview_item_blocks">
        <div className="interview_item_body">
          <div className="interview_item_card_edit">
            <div className="interview_item_card">
              <div className="interview_img_cont">
                <img className="interview_img" src={interview?.url} />
              </div>
              <div className="current_reactions" onClick={() => onHandleChangeReaction()}>
                {/* {curreact.Emoji.emoji}{curreact.count} */}
              </div>
            </div>
            <div className="interview_item_card_headcontent">
              {/* <div className='interview_item_card_head_container'> */}
              <div className="interview_item_card_head">{interview?.title}</div>
              {/* </div> */}
              <div className="interview_item_card_editcont">
                {user && user.role === 'преподаватель' && (
                  <div>
                    <button className="interview_upd_bttn" onClick={() => setUpd((prev) => !prev)}>
                      Редактировать интервью
                    </button>
                  </div>
                )}
                {user && user.role === 'преподаватель' && upd && interview && (
                  <UpdateInterview key={interview?.id} setUpd={setUpd} />
                )}
                <div className="interview_item_card_content">{interview?.content}</div>
              </div>
            </div>
          </div>
          <div>{/* <InterviewComm/> */}</div>
          <div className="interview_reactions_flag">
            <button className="int_reaction_fl">+</button>
            <div className="reactions_comp">
              <InterviewReactions  />
            </div>
          </div>
          <div>
            <InterviewAddComm key={interview?.id} />
          </div>
        </div>
        <div className="interview_item_card_list">
          <h2 className="interview_item_card_list_head">Интервью</h2>
          <ol>
            {interviews.map((int) => (
              <Link
                className="interview_item_card_list_item_link"
                to={`/interviews/${int.id}`}
                onClick={() => setUpd(false)}
              >
                <li className="interview_item_card_list_item">{int.title}</li>
              </Link>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
  return <div>{!interview ? error : contentpage}</div>;
}
