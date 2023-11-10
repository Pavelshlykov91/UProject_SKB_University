/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React ,{ useEffect, useState } from 'react';
import '../administration.css';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../redux/store';
import { useAppDispatch } from '../../../redux/store';
import { addExercises, loadExercises } from '../reducer/ExerciseSlice';
import ExerciseItem from './ExerciseItem';
import type { addExercise } from './type';

export default function ExercisePage(): JSX.Element {

  const [addform, setAddform] = useState(false);
  const [exTitle, setExTitle] = useState('');
  const [exContent, setExContent] = useState('');
  const [exFile, setExFile] = useState('');
  const [exCorAnswer, setExCorAnswer] = useState('');
  const [exDeadline, setExDeadline] = useState('');
  const [exGoals, setExGoals] = useState('');
  const [exCritery, setExCritery] = useState('');
  const [exCourse, setExCourse] = useState('');
  const dispatch = useAppDispatch();
  

  const exercises = useSelector((store: RootState) => store.exercises.exercises);
  const user = useSelector((store:RootState)=>store.auth.user)
  // const error = useSelector((store: RootState) => store.exercises.error);
  // const loading = useSelector((store: RootState) => store.exercises.loading);

  useEffect(() => {
    dispatch(loadExercises());
  }, []);



  const onHandleSubmit: React.FormEventHandler<HTMLFormElement> = async (e): Promise<void> => {
    e.preventDefault();
    const formData = new FormData();

 
    formData.append('user_id',String(user?.id) )
    formData.append('course_id', exCourse);
    formData.append('title', exTitle);
    formData.append('content', exContent);
    formData.append('file', exFile);
    formData.append('corAnswer', exCorAnswer);
    formData.append('deadline', exDeadline);
    formData.append('goals', exGoals);
    formData.append('critery', exCritery);

    const addexercise:addExercise = {
      user_id: user?.id,
      course_id: +exCourse,
      title: exTitle,
      content: exContent,
      file:exFile,
      corAnswer:exCorAnswer,
      deadline:exDeadline,
      goals: exGoals,
      critery:exCritery
    }
    

    // console.log(exTitle)
    // console.log(user?.id)
    console.log(exCourse)
  //     try {
    dispatch(addExercises(addexercise));
  // } catch (error) {
  // }
};



  return (
    <div>
      <button onClick={() => setAddform(!addform)}>Добавить задание</button>
      {addform === true && (
        <div>
          <form onSubmit={onHandleSubmit}>
            <input
              type="text"
              value={exTitle}
              onChange={(e) => setExTitle(e.target.value)}
              placeholder="Заголовок"
            />
      
            <input
              type="text"
              value={exContent}
              onChange={(e) => setExContent(e.target.value)}
              placeholder="Задание"
            />
            <input
              type="text"
              value={exFile}
              onChange={(e) => setExFile(e.target.value)}
              placeholder="Файл"
            />
              <input
              type="text"
              value={exCorAnswer}
              onChange={(e) => setExCorAnswer(e.target.value)}
              placeholder="Правильный ответ"
            />
              <input
              type="text"
              value={exDeadline}
              onChange={(e) => setExDeadline(e.target.value)}
              placeholder="Срок выполнения"
            />
              <input
              type="text"
              value={exGoals}
              onChange={(e) => setExGoals(e.target.value)}
              placeholder="Какие цели задания"
            />
              <input
              type="text"
              value={exCritery}
              onChange={(e) => setExCritery(e.target.value)}
              placeholder="Критерии выполнения"
            />
            <div>
        <div className="filterExercise">
          <label htmlFor="select_admin">Задание</label>
          <select
        id="select_admin"
        className="select_admin"
        value={exCourse}
        onChange={(e) => setExCourse(e.target.value)}
      >
        <option value="1">первый</option>
        <option value="2">второй</option>
        <option value="3">третий</option>
      </select>
        </div>
      </div>
            <button type="submit">Добавить задание</button>
          </form>
        </div>
      )}
      <div>
        <div className="filterExercise">
          <label htmlFor="select_admin">Задание</label>
          <select id="select_admin" className="select_admin">
            <option value="1">первый</option>
            <option value="2">второй</option>
            <option value="3">третий</option>
          </select>
        </div>
      </div>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th style={{ width: '270px' }}>Автор</th>
              <th style={{ width: '220px' }}>Название курса</th>
              <th style={{ width: '220px' }}>Номер курса</th>
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
  );
};

