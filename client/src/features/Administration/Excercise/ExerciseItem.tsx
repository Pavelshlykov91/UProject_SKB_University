import React from 'react';
import type { Exercise } from '../type';

function ExerciseItem({ exercise }: { exercise: Exercise }): JSX.Element {
  return (
    <tr>
      <td>{`${exercise.User.firstName  } ${  exercise.User.lastName  } ${  exercise.User.surname}`}</td>
      <td>{exercise.title}</td>
      <td>{exercise.Course.name}</td>
    </tr>
  );
}

export default ExerciseItem;