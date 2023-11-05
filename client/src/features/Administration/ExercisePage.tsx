/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './administration.css'

function ExercisePage():JSX.Element {
  return (
    <div>  
<div>
<div className='filterStudent'> 
    <label htmlFor="select_admin">Задание</label>
    <select id="select_admin" className='select_admin'>
    <option value="1">первый</option>
    <option value="2">второй</option>
    <option value="3">третий</option>
  </select></div>
</div>
    </div>
  )
}

export default ExercisePage