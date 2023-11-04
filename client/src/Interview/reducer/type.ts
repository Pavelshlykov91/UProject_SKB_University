export type Interview = {
  id?: number;
  title: string;
  content: string;
  url: string;
};

export type InterviewID = Interview['id'];

export type InterviewState = {
  interviews: Interview[];
  error: string | null;
  loading: boolean;
};

export type Acction =
  | { type: 'interviews/load'; payload: Interview[] }
  | { type: 'interviews/add'; payload: Interview };
