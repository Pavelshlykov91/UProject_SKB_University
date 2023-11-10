import type { Reaction } from '@charkour/react-reactions';
import type { User } from '../../auth/type';

export type Interview = {
  id?: number;
  title: string;
  content: string;
  url: string;
  user_id: number;
  url_video?: string 
};

export type Emoji = {
  id: number;
  emoji: string;
  
}; 

export type EmojiId = Emoji['id'];


export type InterviewReaction = {
id: number;
Emoji: Reaction;
count: number;
interview_id: string | number;
}

export type InterviewId = Interview['id'];

export type InterviewState = {
  interviews: Interview[];
  comments: InterviewComment[];
  reactions: InterviewReaction[];
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
