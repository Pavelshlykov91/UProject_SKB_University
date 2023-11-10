/* eslint-disable import/extensions */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../redux/store';
import { fetchSignIn } from './api';
import type { User } from './type';
import './sign-in.css'

const SignIn = (): JSX.Element => {
//   const [errorcheck, setErrorcheck] = useState(0)
const [ch,setCh] = useState(false)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const onHandleUserLog = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    fetchSignIn({ email, password }).then((data: User) => {
        
        if (data.id) {
            dispatch({ type: 'auth/sign-in', payload: data });
            navigate('/main');
        } else if (data.message === 'Такого юзера не существует или пароль неверный') { 
            setCh(true);
            setEmail('');
            setPassword('');
        }
    });
  };

  return (
    <div className="container">
      <div className="form">
        <form onSubmit={onHandleUserLog} className='form2'>
          <label htmlFor="email" className="label">
            Email
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              type="text"
              className="input"
            />
          </label>
  
          <label htmlFor="password" className="label">
            Password
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              type="password"
              className="input"
            />
          </label>
          <button type="submit" className="button">Авторизоваться</button>
        </form>
        {ch && (
          <div className='loginerror'>
            Неверные логин или пароль
          </div>
        )}
      </div>
    </div>
  );
        }

export default SignIn