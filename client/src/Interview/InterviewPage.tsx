import React from 'react'
import InterviewPageItem from './InterviewPageItem'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'

 function InterviewPage() {
  const interviews = useSelector((store:RootState) => store.interviews.interviews)
  return (
    <div>
      <div>
      <div>Интервью</div>
      <p>Душа моя озарена неземной радостью, как эти чудесные весенние утра, которыми я наслаждаюсь от всего сердца. Я совсем один и блаженствую в здешнем краю, словно созданном для таких, как я. Я так счастлив, мой друг, так упоен ощущением покоя, что искусство мое страдает от этого. Ни одного штриха не мог бы я сделать, а никогда не был таким большим художником, как в эти минуты.</p>
      </div>
      <div className='interview__cont'>
          {interviews.map((int)=> ( 
                       <InterviewPageItem key={int.id} interview={int}/> 
        ))} 
        lalalalla
      </div>
    </div>
  )
}

export default InterviewPage