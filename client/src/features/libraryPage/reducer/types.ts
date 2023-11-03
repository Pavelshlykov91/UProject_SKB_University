import type { Material} from '../type';

export type MaterialsState = {
  materials: Material[];
  error: string | null;
  loading: boolean;
};

export type ThemesState = {
  themes: [];
};

export type Action = { type: 'materials/load'; payload: Material[] };
