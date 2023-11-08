import type { Album, AlbumId, Photo, PhotoId } from '../type';

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

export type Action =
  | { type: 'albums/load'; payload: Album[] }
  | { type: 'albums/add'; payload: FormData }
  | { type: 'albums/delete'; payload: AlbumId }
  | { type: 'albums/update'; payload: AlbumId }
  | { type: 'photos/add'; payload: FormData }
  | { type: 'photos/delete'; payload: PhotoId };

