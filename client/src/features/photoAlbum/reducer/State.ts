import type { Album, AlbumId, Photo } from '../type';

export type AlbumsState = {
  albums: Album[];
  error: string | null;
  loading: boolean;
};

// export type PhotosState = {
//   photos: Photo[];
//   error: string | null;
//   loading: boolean;
// };

// export type Action =
//   | { type: 'albums/load'; payload: Album[] }
//   | { type: 'albums/add'; payload: Album }
//   | { type: 'albums/delete'; payload: AlbumId }
//   | { type: 'albums/update'; payload: AlbumId };
