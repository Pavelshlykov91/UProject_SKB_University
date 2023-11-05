/* eslint-disable import/order */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react'
import * as api from './api'
import './administration.css'
import { useSelector } from 'react-redux';
import { useAppDispatch, type RootState } from '../../redux/store';
import StudentItem from './StudentItem';
import { loadUsers } from './reducer/StudentSlice';

function StudentPage():JSX.Element {
    const dispatch = useAppDispatch();
    const students = useSelector((store:RootState) => store.students.users);
    const error = useSelector((store: RootState) => store.students.error);
    const loading = useSelector((store: RootState) => store.students.loading);

    

    useEffect(() => {
        dispatch(loadUsers())   
         }, []);
    // 
  return (
    <div>  
<div className='filterStudent'> 
    <label htmlFor="select_admin">Курс</label>
    <select id="select_admin" className='select_admin'>
    <option value="1">первый</option>
    <option value="2">второй</option>
    <option value="3">третий</option>
  </select></div>
  <div>
{students.map((student) => <StudentItem student = {student} key={student.id}/>)}
 </div>
    </div>
  )
}

export default StudentPage