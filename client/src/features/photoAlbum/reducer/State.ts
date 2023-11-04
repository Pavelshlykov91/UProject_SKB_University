import type { Album } from '../type';

export type AlbumsState = {
  albums: Album[];
  error: string | null;
  loading: boolean;
};

export type Action =
  | { type: 'albums/load'; payload: Album[] }
  | { type: 'albums/add'; payload: Album };
