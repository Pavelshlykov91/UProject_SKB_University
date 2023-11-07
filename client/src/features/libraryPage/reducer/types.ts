import type { Material, MaterialID, Theme } from '../type';

export type MaterialsState = {
  materials: Material[];
  error: string | null;
  loading: boolean;
};

export type ThemesState = {
  themes: Theme[];
  error: string | null;
  loading: boolean;
};

export type Action =
  | { type: 'materials/load'; payload: Material[] }
  | { type: 'materials/add'; payload: Material }
  | { type: 'materials/delete'; payload: MaterialID }
  | { type: 'materials/update'; payload: MaterialID }
  | { type: 'themes/load'; payload: Theme[] };
