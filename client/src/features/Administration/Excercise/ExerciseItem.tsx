/* eslint-disable react/button-has-type */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable import/order */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState, useEffect } from 'react';
import type { Exercise } from '../type';

import { useAppDispatch } from '../../../redux/store';
import './exercise.css';
import { loadExercisesMaterials } from '../reducer/ExerciseSlice';
import ExerciseMaterialItem from './ExerciseMaterialItem';

function ExerciseItem({ exercise }: { exercise: Exercise }): JSX.Element {
  const [arrowdirection, setArrowdirection] = useState(false);
  const dispatch = useAppDispatch();

  // const execisematerials = useSelector((store:RootState)=> store.exercises.exercises)

  const arrowChange = () => {
    const value = !arrowdirection;
    setArrowdirection(value);
  };
  useEffect(() => {
    dispatch(loadExercisesMaterials(exercise.id));
  }, []);

  return (
    <div className="main_exerciseitem">
      <div className="container_exerciseitem">
        <div className="head_exercise_container">
          <div className="exercise_name">{exercise.title}</div>
          <div className="exercise_arrow">
            {arrowdirection === false && (
              <button className="groups-btn" onClick={arrowChange}>
                &#11167;
              </button>
            )}
            {arrowdirection === true && (
              <button className="groups-btn" onClick={arrowChange}>
              &#11165;
            </button>
            )}
          </div>
        </div>
        {arrowdirection === true && (
          <div className="exercise_input_material" key={exercise.id}>
            {/* {execisematerials.map((exmat)=> <ExerciseMaterialItem exmat={exmat} key={exmat.id}/>)} */}
            {exercise.exerciseMaterial.map((exmat) => (
              <ExerciseMaterialItem exmat={exmat} key={exmat.id} />
            ))}
            {/* <a href="/library/:materialId">Описание задания</a>
            {exercise.title}
            {exercise.deadline}
            {exercise.User.lastName} */}
          </div>
        )}
      </div>
    </div>
  );
}

export default ExerciseItem;
