import type { Album, Photo } from '../type';

export type AlbumsState = {
  albums: Album[];
  photos: Photo[];
  error: string | null;
  loading: boolean;
};

export type PhotosState = {
  photos: Photo[];
  error: string | null;
  loading: boolean;
};
