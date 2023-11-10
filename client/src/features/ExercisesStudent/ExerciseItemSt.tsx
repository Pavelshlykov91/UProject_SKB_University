import React, {useState} from 'react'
import { useParams } from 'react-router'
import  { RootState, } from '../../redux/store';
import { useSelector } from 'react-redux';
// import { addAnswers } from '../Administration/reducer/ExerciseSlice';

export default function ExerciseItemSt() {
  const [answer, setAnswer]=useState('')
  const {exerciseId}=useParams()
  // const dispatch = useAppDispatch()
  const allexercises = useSelector((store: RootState) => store.exercises.exercises);
    const exercise = allexercises.find((el)=> exerciseId? el.id===+exerciseId:1)
    // const user_id = useSelector((store:RootState)=> store.auth.user?.id)
    const onHandleAnswer: React.FormEventHandler<HTMLFormElement> = async (e) => {
      e.preventDefault();
  
      // dispatch(addAnswers({ user_id, answer, exerciseId }));
      setAnswer('')  
    }
  return (
    <div>
      <div>
      <div className='ex_item_title'>{exercise?.title}</div>
      <div className='ex_item_deadline'>{exercise?.deadline}</div>
      <div className='ex_item_content'>{exercise?.content}</div>
      <div className='ex_item_goals'>{exercise?.goals}</div>
      <div className='ex_item_critery'>{exercise?.critery}</div>
      </div>
      <div className='ex_item_answer_input'>
        <form onSubmit={onHandleAnswer}>
        <input value={answer} onChange={(e)=>setAnswer(e.target.value)}></input>
        <button type='submit'></button>
        </form>
      </div>
    </div>
  )
}
