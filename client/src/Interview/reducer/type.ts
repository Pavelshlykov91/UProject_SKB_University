import { User } from "../../features/auth/type";

export type Interview = {
  id?: number|string;
  title: string;
  content: string;
  url: string;
};

export type InterviewId = Interview['id'];

export type InterviewState = {
  interviews: Interview[];
  comments: InterviewComment[]
  error: string | null;
  loading: boolean;
};

export type InterviewComment = {
  id?: number|string;
  user_id?: number;
  interview_id?: number|string;
  content: string;
  User: User|undefined
};




export type InterviewCommId = InterviewComment['id'];

export type Acction =
  | { type: 'interviews/load'; payload: Interview[] }
  | { type: 'interviews/add'; payload: Interview };
