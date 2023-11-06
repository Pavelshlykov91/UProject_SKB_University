/* eslint-disable import/prefer-default-export */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import type { Exercise, Group, User } from "./type";

export const UserFetch = async (): Promise<User[]> => {
    const res = await fetch('/api/administration/students');
    if (res.status >= 400) {
      throw new Error(res.statusText);
    }
    const data = await res.json()

    return data
  };

  export const ExerciseFetch = async (): Promise<Exercise[]> => {
    const res = await fetch('/api/administration/exercise');
    if (res.status >= 400) {
      throw new Error(res.statusText);
    }
    const data = await res.json()
    return data
  };

  export const GroupFetch = async (): Promise<Group[]> => {
    const res = await fetch('/api/administration/group');
    if (res.status >= 400) {
      throw new Error(res.statusText);
    }
    const data = await res.json()
    
    return data
  };