/* eslint-disable import/prefer-default-export */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import type { User } from "./type";

export const UserFetch = async (): Promise<User[]> => {
    const res = await fetch('/api/administration/students');
    if (res.status >= 400) {
      throw new Error(res.statusText);
    }
    const data = await res.json()

    return data
  };