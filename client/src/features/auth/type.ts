export type User = {
    id:number,
    firstName:string,
    lastName:string,
    surname:string,
    email:string,
    password:string,
    city:string,
    position:string,
    department:string,
    bg:string,
    role:string,
    course_id:number,
    foto:string,
}

export type AuthState = {
    user: User | undefined;
    error: string | null;
  };

  export type Action =
  | { type: 'auth/checkUser'; payload: { message: string; user: User } }
  | { type: 'auth/logOut' }
  | { type: 'auth/sign-in'; payload: User } 

  export type UserWithoutId = Omit<User, 'id'>;

  export type UserSign ={
email:string,
password:string
  }