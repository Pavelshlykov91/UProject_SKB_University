import type { User } from '../../features/auth/type';

export type Interview = {
  id?: number;
  title: string;
  content: string;
  url: string;
  user_id: number;
};

export type Reaction = {
  id: number;
  emoji: string;
  
}; 

export type EmojiId = Reaction['id'];


export type InterviewReactions = {
emoji: Reaction;
count: number;
interview_id: string | number;
}

export type InterviewId = Interview['id'];

export type InterviewState = {
  interviews: Interview[];
  comments: InterviewComment[];
  reactions: InterviewReactions[];
  error: string | null;
  loading: boolean;
};

export type InterviewComment = {
  id?: number;
  user_id: number;
  interview_id: string | number;
  content: string;
  User: User;
};

export type InterviewCommId = InterviewComment['id'];
