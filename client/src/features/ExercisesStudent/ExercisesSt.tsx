import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../redux/store';
import { loadExercises } from '../Administration/reducer/ExerciseSlice';
import { Link } from 'react-router-dom';

export default function ExercisesSt() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(loadExercises());
  }, []);
  const user = useSelector((store: RootState) => store.auth.user);
  const allexercises = useSelector((store: RootState) => store.exercises.exercises);
  console.log(allexercises);

  const exercises = allexercises.filter((ex) => ex.course_id === user?.course_id);

  const content = (
    <div>
      <div className="LK_tasks_exercise_active">Активные задания</div>
      {exercises?.map((el) => (
        <div key={el.id}>
          <Link to={`/exercises/${el.id}`}>{el.title}</Link>
        </div>
      ))}
      <div className="LK_tasks_exercise_deadline">Дедлайн</div>
      {exercises?.map((el) => (
        <div key={el.id}>
          <div className="LK_tasks_exercise_deadline">{el.deadline}</div>
        </div>
      ))}
    </div>
  );
  return <div>{exercises.length ? content : <h1>Нет активных заданий</h1>}</div>;
}
