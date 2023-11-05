import type { User } from "../type";

export type UsersState = {
    users: User[];
    error: string | null;
    loading: boolean;
  };

  export type Action = {type:'user/init'; payload:User[]}