import type { Material, Theme } from '../type';

export type MaterialsState = {
  materials: Material[];
  error: string | null;
  loading: boolean;
};

export type ThemesState = {
  themes:Theme [];
  error: string | null;
  loading: boolean;
};

export type Action =
  | { type: 'materials/load'; payload: Material[] }
  | { type: 'materials/add'; payload: Material }
  | { type: 'themes/load'; payload: Theme[] }

