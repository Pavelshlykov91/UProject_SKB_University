/* eslint-disable import/order */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import './exercise.css';
import type { ExerciseMaterial } from './type';

function ExerciseMaterialItem({ exmat }: { exmat: ExerciseMaterial }): JSX.Element {

  return <div>{exmat.name}</div>;
}

export default ExerciseMaterialItem;
