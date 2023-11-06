/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react'
import '../administration.css'
import { useSelector } from 'react-redux';
import type { RootState} from '../../../redux/store';
import  { useAppDispatch } from '../../../redux/store';
import { loadExercises } from '../reducer/ExerciseSlice';
import ExerciseItem from './ExerciseItem';

function ExercisePage():JSX.Element {
  const dispatch = useAppDispatch();
  const exercises = useSelector((store:RootState) => store.exercises.exercises);
  // const error = useSelector((store: RootState) => store.exercises.error);
  // const loading = useSelector((store: RootState) => store.exercises.loading);

  useEffect(() => {
    dispatch(loadExercises());
  }, []);

  return (
    <div>  
<div>
<div className='filterExercise'> 
    <label htmlFor="select_admin">Задание</label>
    <select id="select_admin" className='select_admin'>
    <option value="1">первый</option>
    <option value="2">второй</option>
    <option value="3">третий</option>
  </select></div>
</div>
<div>
<table className='table'>
      <thead>
        <tr>
          <th style={{width:'270px'}}>Автор</th>
          <th style={{width:'220px'}}>Название курса</th>
          <th style={{width:'220px'}}>Номер курса</th>
        </tr>
      </thead>
      <tbody>
        {exercises.map((exercise) => (
          <ExerciseItem exercise={exercise} key={exercise.id} />
        ))}
         </tbody>
      </table>
      </div>
    </div>
  )
}

export default ExercisePage