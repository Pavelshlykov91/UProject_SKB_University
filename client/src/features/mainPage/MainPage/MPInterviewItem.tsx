import React from 'react'
import { useSelector } from 'react-redux'
import type { RootState } from '../../../redux/store'

export default function MPInterviewItem() {
const ints = useSelector((store: RootState) => store.interviews.interviews)

  return (
    <div>
    <div>Интервью</div>
    {ints.map((int)=> (
      <div className='mp_interview_it_cont'>
        <div>{int.title}</div>
        <div><img src={int.url}/></div>
      </div>
    ))}
    <div className='v_more'>V</div>

    </div>

  )
}
