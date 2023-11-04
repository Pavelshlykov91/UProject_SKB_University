/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React, {useEffect} from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import './navbar.css';
import { useSelector } from 'react-redux';
import type { RootState} from '../../redux/store';
import { useAppDispatch } from '../../redux/store';
import { fetchLogOut } from '../auth/api';
import { checkUser } from '../auth/authSlice';


function Navbar() {
  const dispatch = useAppDispatch();
  const user = useSelector((store:RootState)=>store.auth.user)
  const navigate = useNavigate()
  useEffect(()=>{
    dispatch(checkUser());
  },[])
  
  const logOut = (): void => {
    fetchLogOut().then((data:{ message: string }) => {
      dispatch({ type: 'auth/logout', payload: data });
      navigate('/auth');
    });
  }
  return (
    <>
      <div className="navbar">
        <div>
          Добро пожалова, {user?.firstName}!
        </div>
        <NavLink to="/" className="navbar-link">
          Главная страница
        </NavLink>
        <NavLink to="/library" className="navbar-link">
          Библиотека
        </NavLink>
        <NavLink to="/gallery" className="navbar-link">
          Галерея
        </NavLink>
        <NavLink to="/interview" className="navbar-link">
          Интервью
        </NavLink>
        <NavLink onClick={logOut} to="/sign-in" className="navbar-link">
          Выйти
        </NavLink>
      </div>
      <Outlet />
    </>
  );
}

export default Navbar;
