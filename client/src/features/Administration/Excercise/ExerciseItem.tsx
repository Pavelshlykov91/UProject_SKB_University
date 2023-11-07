import React, { useState } from 'react';
import type { Exercise } from '../type';
import './exercise.css';

function ExerciseItem({ exercise }: { exercise: Exercise }): JSX.Element {
  const [arrowdirection, setArrowdirection] = useState(false);

  const arrowChange = () => {
    const value = !arrowdirection;
    setArrowdirection(value);
    console.log(arrowdirection);
  };

  return (
    <div className='main_exerciseitem'>
    <div className='container_exerciseitem'>
      <div className='head_exercise_container'>
        <div className='exercise_name'>{exercise.title}</div>
        <div className='exercise_arrow'>
          {arrowdirection === false &&
          <img
            className='img_arrow'
            onClick={arrowChange}
            src='../../../../public/img/arrow-down.png'
            alt='arrow_down'
          />}
          {arrowdirection === true &&
          <img
            className='img_arrow'
            onClick={arrowChange}
            src='../../../../public/img/arrow-up.png'
            alt='arrow_down'
          />}
        </div>
      </div>
      {arrowdirection === true &&
        <div className='exercise_input_material'>
          <a href='/library/:materialId'>
          Описание задания
         </a>
            {exercise.content}
            {exercise.deadline}
            {exercise.User.lastName}
          </div>}
    </div>
      {/* <tr>
        <td>{${exercise.User.firstName} ${exercise.User.lastName} ${exercise.User.surname}}</td>
        <td>{exercise.title}</td>
        <td>{exercise.Course.name}</td>
      </tr> */}
    </div>
  );
}

export default ExerciseItem;