/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'
import './administration.css'
import StudentPage from './StudentPage'
import ExercisePage from './ExercisePage'
import GroupPage from './GroupPage'

function AdminMain():JSX.Element {
    const [page, setPage] = useState(1)
  return (
    <div className='main_admin'>
        <div className="sidebar">
  <ul>
  <li><label htmlFor="students" onClick={() => setPage(1)}>Студенты</label></li>
  <li><label htmlFor="assignments" onClick={() => setPage(2)}>Задания</label></li>
  <li><label htmlFor="groups" onClick={() => setPage(3)}>Группы</label></li>
  </ul>
</div>
{page === 1 ? <StudentPage /> : page === 2 ? <ExercisePage /> : <GroupPage />}
{/* <div>
<div className='filterStudent'> 
    <label htmlFor="select_admin">Курс</label>
    <select id="select_admin" className='select_admin'>
    <option value="1">первый</option>
    <option value="2">второй</option>
    <option value="3">третий</option>
  </select></div>
</div> */}
    </div>
  )
}

export default AdminMain