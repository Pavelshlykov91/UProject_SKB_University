export type Answer = {
  id: number;
  user_id: number;
  exercise_id: number;
  done_status: boolean;
  answer: string;
  file:string;
  deprecated: boolean
}

export type answerId = Answer['id']

export type AnswerState = {
  answers: Answer[];
  error: string | null;
  loading: boolean;
}