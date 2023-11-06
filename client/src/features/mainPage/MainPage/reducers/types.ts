import type { Int } from '../type';

export type IntState = {
  ints: Int[];
  loading: boolean;
};

export type Acction = { type: 'int/load'; payload: Int[] };
