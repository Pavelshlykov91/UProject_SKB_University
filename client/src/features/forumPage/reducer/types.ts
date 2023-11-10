import type { Forum, ForumAnswer, ForumID } from '../type';

export type ForumsState = {
  forums: Forum[];
  comments: Comment[]
  error: string | null;
  loading: boolean;
};

export type ForumAnswersState = {
  comments: ForumAnswer[];
  error: string | null;
  loading: boolean;

};

export type Action =
  | { type: 'forums/load'; payload: Forum[] }
  | { type: 'forums/add'; payload: Forum }
  | { type: 'forums/delete'; payload: ForumID }
  | { type: 'forums/update'; payload: ForumID }
  |{type: 'comments/load'; payload:ForumAnswer[]}

