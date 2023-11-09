/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import type { RootState } from '../redux/store';
import AddInterview from './AddInterview';
import './styles/index.css';
// import { Link } from 'react-router-dom'

function InterviewPage() {
  const user = useSelector((store: RootState) => store.auth.user);
  const interviews = useSelector((store: RootState) => store.interviews.interviews);
  
  return (
    <div className="interviewpage_container">
      <div>
        <img src="../../public/img/int.jpg" />
      </div>
      <p className="interviewpage_p">
        Душа моя озарена неземной радостью, как эти чудесные весенние утра, которыми я наслаждаюсь
        от всего сердца. Я совсем один и блаженствую в здешнем краю, словно созданном для таких, как
        я. Я так счастлив, мой друг, так упоен ощущением покоя, что искусство мое страдает от этого.
        Ни одного штриха не мог бы я сделать, а никогда не был таким большим художником, как в эти
        минуты.
      </p>
      {user && user.role === 'преподаватель' && <AddInterview />}
      <div className="interview-cards">
        {interviews.map((int) => (
          <div key={int.id} className="interview-card">
            <Link className='interview_card_link' to={`/interviews/${int.id}`}>
              <img className='interview_card_img'src={int.url} />
              <h3 className='interview_card_head'>{int.title}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InterviewPage;
