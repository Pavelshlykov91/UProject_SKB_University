import React from 'react';
import type { Group } from '../type';

function GroupItem({ group }: { group: Group }): JSX.Element {
  return (
    <div>
      {`Номер группы: ${group.group_id}; `}
      {`Номер задания: ${group.exercise_id}; `}
      {`Город студента: ${group.User.city}; `}
      <button type='button'>Показать группу</button>
    </div>
  );
}

export default GroupItem;