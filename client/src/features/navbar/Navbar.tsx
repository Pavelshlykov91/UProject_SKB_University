/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  return (
    <>
      <div className="navbar">
        <Link to="/" className="navbar-link">
          Главная страница
        </Link>
        <Link to="/library" className="navbar-link">
          Библиотека
        </Link>
        <Link to="/gallery" className="navbar-link">
          Галерея
        </Link>
        <Link to="/interview" className="navbar-link">
          Интервью
        </Link>
        <Link to="/" className="navbar-link">
          Регистрация
        </Link>
      </div>
      <Outlet />
    </>
  );
}

export default Navbar;
