import React from 'react';
import type { User } from '../type';

function StudentItem({ student }: { student: User }): JSX.Element {
  return (
    <tr>
      <td>{student.firstName}</td>
      <td>{student.lastName}</td>
      <td>{student.surname}</td>
      <td>{student.course_id}</td>
      <td>{student.city}</td>
      <td>{student.email}</td>
    </tr>
  );
}

export default StudentItem;
