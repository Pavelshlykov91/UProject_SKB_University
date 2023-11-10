import React from 'react';
import type { Group } from '../type';

export default function StudentLine({ group }: { group: Group }): JSX.Element {
  return (
    <div className="groups__container-items-text">
      <div className="groups__container-items-text-info">
        <p>{`Студент: ${group.User.firstName} ${group.User.lastName}  ${group.User.surname}`}</p>
        <p>{`Курс: ${group.User.course_id}`}</p>
      </div>
      <div className="groups__container-items-text-info">
        <p>{`Студент: ${group.User.lastName} ${group.User.firstName} ${group.User.surname}`}</p>
        <p>{`Курс: ${group.User.course_id}`}</p>
      </div>
      <div className="groups__container-items-text-info">
        <p>{`Студент: ${group.User.lastName} ${group.User.firstName} ${group.User.surname}`}</p>
        <p>{`Курс: ${group.User.course_id}`}</p>
      </div>
    </div>
  );
}
