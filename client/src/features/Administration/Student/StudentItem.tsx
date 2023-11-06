import React from 'react';
import { Link } from 'react-router-dom';
import type { User } from '../type';

function StudentItem({ student }: { student: User }): JSX.Element {
  return (
    <tr>
      <td><Link to={`/administration/${student.id}`}>{student.firstName}</Link></td>
      <td><Link to={`/administration/${student.id}`}>{student.lastName}</Link></td>
      <td><Link to={`/administration/${student.id}`}>{student.surname}</Link></td>
      <td>{student.course_id}</td>
      <td>{student.city}</td>
      <td>{student.email}</td>
    </tr>
  );
}

export default StudentItem;
