import type { Exercise, Group, User } from "../type";

export type UsersState = {
    users: User[];
    error: string | null;
    loading: boolean;
  };

  export type ExercisesState = {
    exercises: Exercise[];
    error: string | null;
    loading: boolean;
  };

  export type GroupState = {
    groups: Group[];
    error: string | null;
    loading: boolean;
  };

  export type Action = 
  | {type:'user/init'; payload:User[]}
  | {type:'exercise/init'; payload:Exercise[]}
  | {type:'group/init'; payload:Group[]}