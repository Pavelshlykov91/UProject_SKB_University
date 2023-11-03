/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React from 'react'
import { Outlet } from 'react-router-dom'

function Navbar() {
    
  return (
    <>
<div className="navbar">
  <label htmlFor="home">Главная страница</label>
  <label htmlFor="schedule">Расписание</label>
  <label htmlFor="register">Регистрация</label>
  <label htmlFor="login">Авторизация</label>
  <label htmlFor="logout">Выход</label>
</div>
 <Outlet />
 </>
  )
}

export default Navbar

