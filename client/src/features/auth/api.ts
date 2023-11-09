/* eslint-disable import/prefer-default-export */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import type { User, UserSign, UserUpdate } from "./type";


export const fetchSignIn = async (user: UserSign): Promise<User> => {
    const res = await fetch('/api/auth/sign-in', {
      method: 'post',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    return res.json();
  };
  
  export const fetchCheckUser = async (): Promise<{ message: string; user: User }> => {
    const res = await fetch('/api/auth/check');
    return res.json();
  };

  export const fetchLogOut = async (): Promise<{ message: string }> => {
    const res = await fetch('/api/auth/logout');
    const data: { message: string } = await res.json();
  
    return data;
  };

  export const fetchUserChange = async (user:UserUpdate): Promise<User> => {
    const res = await fetch('/api/auth/change', {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    
    return res.json();
  };
