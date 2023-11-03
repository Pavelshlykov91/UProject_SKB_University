import { Int } from '../type';

export const fetchMPInt = async (): Promise<Int[]> => {
  console.log(111111);
  
  const res = await (await fetch('/api/MainPage')).json();
  console.log(res, '-----');
  
  return res;
};
