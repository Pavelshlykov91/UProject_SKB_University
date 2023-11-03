import React from 'react'
import { Interview } from './reducer/type'

export default function InterviewPageItem({interview}:{interview : Interview}):JSX.Element {
  return (
    <div>
        <div className='interview_img_cont'>
          {interview.url}
        </div>
        <div>{interview.title}</div>
        <div>{interview.content}</div>
    </div>
  )
}
