import React from 'react'
// import { useSelector } from 'react-redux'
// import { RootState } from '../redux/store'

export default function InterviewReactions({onHandleChangeReaction} : {onHandleChangeReaction: (value:string) => void}) {
  // const reactions = useSelector((store:RootState)=> store.interviews.reactions)
  

  return (
    <div>
      <div className='reactions_choice'>
        <div className='interview_item_reaction_select_container'><svg xmlns="http://www.w3.org/2000/svg" width="467" height="75" viewBox="0 0 467 75" fill="none">
<path d="M0 41.1266C0 26.3834 16.721 14.4317 37.3474 14.4317H429.653C450.279 14.4317 467 26.3834 467 41.1266V48.3051C467 63.0483 450.279 75 429.653 75H37.3474C16.721 75 0 63.0483 0 48.3051V41.1266Z" fill="#313C8D"/>
<path d="M120.83 28.2652H42.6828L81.7564 0.52343L120.83 28.2652Z" fill="#313C8D"/>
</svg></div>
<div className='interview_reaction_select'>
        
      </div>
    </div>
    </div>
  )
}
