/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useEffect } from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import './navbar.css';
import { useSelector } from 'react-redux';
import type { RootState } from '../../redux/store';
import { useAppDispatch } from '../../redux/store';
import { fetchLogOut } from '../auth/api';
import { checkUser } from '../auth/authSlice';
import '../../../public/img/Frame-19svg.svg';

function Navbar() {
  const dispatch = useAppDispatch();
  const user = useSelector((store: RootState) => store.auth.user);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(checkUser());
  }, []);

  const logOut = (): void => {
    fetchLogOut().then((data: { message: string }) => {
      dispatch({ type: 'auth/logout', payload: data });
      navigate('/');
    });
  };
  return (
    <>
      {user && (
        <div className="navbar">
          <img className="nav-logo" src="../../../public/img/image 2.png" alt="" />
          <NavLink to="/main" className="navbar-link">
            Главная страница
          </NavLink>
          {user.role === 'преподаватель' && (
            <NavLink to="/administration" className="navbar-link">
              Администрирование
            </NavLink>
          )}
          {user.role === 'студент' && (<NavLink to="/exercises" className="navbar-link">
            Задания
          </NavLink>)}
          <NavLink to="/forum" className="navbar-link">
            Форум
          </NavLink>
          <NavLink to="/library" className="navbar-link">
            Библиотека
          </NavLink>
          <NavLink to="/gallery" className="navbar-link">
            Галерея
          </NavLink>
          <NavLink to="/interviews" className="navbar-link">
            Интервью
          </NavLink>
          <div className="usernavbar">
            <h3>{user?.firstName}</h3>
            <img className="logoUser" src={user.foto} alt="foto" />
            <ul className="navigation">
              <li>
                <a href="" title="Portfolio">
                  <img className="frame_nav" src="../../../public/img/Frame-19svg.svg" />
                </a>
                <ul className="strNavBar">
                  <li>
                    <NavLink to="/myaccount" className="navbar-link-frame">
                      Личный кабинет
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={logOut} to="/sign-in" className="navbar-link-frame">
                      Выйти
                    </NavLink>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      )}
      <Outlet />
    </>
  );
}

export default Navbar;
