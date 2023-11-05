/* eslint-disable import/no-duplicates */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable import/order */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import '../administration.css';
import { useSelector } from 'react-redux';
import { useAppDispatch, type RootState } from '../../../redux/store';
import StudentItem from './StudentItem';
import { loadUsers } from '../reducer/StudentSlice';

function StudentPage(): JSX.Element {
  const [selectedValue, setSelectedValue] = useState('')
  const dispatch = useAppDispatch();
  const students = useSelector((store: RootState) => store.students.users);
  const error = useSelector((store: RootState) => store.students.error);
  const loading = useSelector((store: RootState) => store.students.loading);

  const ChooseFilter = (value: React.SetStateAction<string>) => {   
    setSelectedValue(value)
  }

  useEffect(() => {
    dispatch(loadUsers());
  }, []);
  //
  return (
    <div>
      <div className="filterStudent">
        <label htmlFor="select_admin">Курс</label>
        <select id="select_admin" className="select_admin" onChange={(event) => {
            const { value } = event.target
            ChooseFilter(value)
          }}>
          <option value="">все курсы</option>
          <option value="1">первый</option>
          <option value="2">второй</option>
          <option value="3">третий</option>
        </select>
      </div>
      <div>
      <table className='table'>
      <thead>
        <tr>
          <th style={{width:'220px'}}>Имя</th>
          <th style={{width:'220px'}}>Фамилия</th>
          <th style={{width:'220px'}}>Отчество</th>
          <th style={{width:'120px'}}>Курс</th>
           <th style={{width:'240px'}}>Город</th>
           <th style={{width:'240px'}}>Email</th>
        </tr>
      </thead>
      <tbody>
      {selectedValue !== ''
                  ? students.map((student) => (student.Course.name === selectedValue ? <StudentItem student={student} key={student.id} /> : null))
                  : students.map((student) =>  <StudentItem student={student} key={student.id} /> )}
        {/* {students.map((student) => (
          <StudentItem student={student} key={student.id} />
        ))} */}
      </tbody>
      </table>
      </div>
    </div>
  );
}

export default StudentPage;
