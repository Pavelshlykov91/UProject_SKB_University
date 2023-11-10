import type { User } from '../auth/type'

export type Forum = {
  id?: number;
  user_id?: number;
  title: string;
  content: string;
  img?: string;
};

export type ForumID = Forum['id'];

export type ForumAnswer = {
  id: number;
  user_id: number;
  forum_id: string | number;
  content: string;
  User: User;
};

export type ForumAnswerID = ForumAnswer['id']