import React from 'react';
import type { Exercise, Group } from '../type';

function GroupItem({ group }: { group: Group }): JSX.Element {
  return (
    <div>
      {group.exercise_id}
      {group.group_id}
      {group.user_id}
      {group.User.city}
      {group.Group.number}
    </div>
  );
}

export default GroupItem;