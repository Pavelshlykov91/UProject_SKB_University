import { Int } from '../type';

export const fetchMPInt = async (): Promise<Int[]> => {
  
  const res = await (await fetch('/api/MainPage')).json();
  
  return res;
};
