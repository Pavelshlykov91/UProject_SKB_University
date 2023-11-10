/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import type { RootState} from '../../redux/store';
import { useAppDispatch } from '../../redux/store';
// import InterviewComm from './InterviewComm';
import InterviewAddComm from './InterviewAddComm';
import { loadInterview, loadInterviewcomm } from './reducer/InterviewPageSlice';
import UpdateInterview from './UpdateInterview';
import InterviewReactions from './InterviewReactions';
import InterviewModalDelete from './InterviewModalDelete';
import InterviewItemVideo from './InterviewItemVideo';

export default function InterviewItem(): JSX.Element {
  const { interviewId } = useParams();
  const user = useSelector((store: RootState) => store.auth.user);
  const interviews = useSelector((store: RootState) => store.interviews.interviews);
  const interview = interviews.find((int) => interviewId && int.id === +interviewId);
  const dispatch = useAppDispatch();
  const [upd, setUpd] = useState(false);
  const [del, setDel] = useState(false);
  // const [selectedReactions, setSelectedReactions] = useState([]);

  
  // const [reaction, setReaction] = useState('');

  useEffect(() => {
    if (interviewId) {
      // dispatch(loadReactions());
      dispatch(loadInterviewcomm(interview?.id));
      dispatch(loadInterview());
    }
  }, []);

  const reactions = useSelector((store: RootState) => store.interviews.reactions);

  const reaction1 = reactions.find((el) => el.interview_id === interview?.id);

  const onHandleChangeReaction = () => {};
  // const reaction1 = reactions.find((re) => re.interview_id === interviewId);
  // console.log(111122223333, reaction1);

  // const onHandleChangeReaction = (x: string) => {
  //   setReaction(x);
  // };

  const error = <h1>Такого интервью мы пока не придумали</h1>;
  const contentpage = (
    <div className="interview_item_container">
      <div className="interview_item_blocks">
        <div className="interview_item_body">
          <div className="interview_item_card_edit">
            <div className="interview_item_card">
              <div className="interview_img_cont">
                {interview?.url_video && interview?.url_video?.length>5 ? <InterviewItemVideo/>: <img className="interview_img" src={interview?.url} />}
              </div>
              <div className="current_reactions" onClick={() => onHandleChangeReaction()}>
                {reaction1 && (
                  <div>
                    {/* {reaction1.Emoji.emoji} */}
                    {/* {reaction1.count} */}
                  </div>
                )}
              {/* <div className="current_reactions" onClick={() => onHandleChangeReaction('')}> */}
                
              </div>
            </div>
            <div className="interview_item_card_headcontent">
              <div className="interview_item_card_head_container">
                <div className="interview_item_card_head">{interview?.title}</div>
              </div>
              <div className="interview_item_card_editcont">
                {user && user.role === 'преподаватель' && (
                  <div>
                    <button className="interview_upd_bttn" onClick={() => setUpd((prev) => !prev)}>
                      Редактировать интервью
                    </button>
                    <button className="interview_delete_bttn" onClick={() => setDel(true)}>
                      Удалить интервью
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
              <InterviewReactions />
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
      {del && <InterviewModalDelete id={interview?.id} setDel={setDel} del={del} />}
    </div>
    // </div>
  );
  return <div>{!interview ? error : contentpage}</div>;
}
