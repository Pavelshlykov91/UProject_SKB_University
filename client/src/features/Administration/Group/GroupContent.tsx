/* eslint-disable react/no-array-index-key */
import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../redux/store';
import StudentLine from './StudentLine';

export default function GroupContent({ index }: { index: number }): JSX.Element {
  const groups = useSelector((store: RootState) => store.groups.groups);

  const userGroups = groups.filter((group) => group.group_id === index);

  return (
    <div className="groups__container-items">
      <h2>{`Номер задания: ${userGroups[0].exercise_id}`}</h2>
      {userGroups.map((group) => (
        <StudentLine key={group.id} group={group} />
      ))}
      <button className="groups__container-items-btn" type="button">
        Подробнее &#11166;
      </button>
    </div>
  );
}
