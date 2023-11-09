import React from 'react'
import { useParams } from 'react-router'
import { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';

export default function ExerciseItemSt() {
  const {exerciseId}=useParams()
  const allexercises = useSelector((store: RootState) => store.exercises.exercises);
    const exercise = allexercises.find((el)=> exerciseId? el.id===+exerciseId:1)
  return (
    <div>
      <div className='ex_item_title'>{exercise?.title}</div>
      <div className='ex_item_deadline'>{exercise?.deadline}</div>
      <div className='ex_item_content'>{exercise?.content}</div>
      <div className='ex_item_goals'>{exercise?.goals}</div>
      <div className='ex_item_critery'>{exercise?.critery}</div>
    </div>
  )
}
