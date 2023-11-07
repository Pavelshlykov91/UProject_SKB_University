export type Album = {
  id: number;
  user_id: number;
  title: string;
  content: string;
  url: string;
  Fotos: Photo[];
};

export type AlbumId = Album['id'];
export type AlbumContent = Pick<Album, 'title' | 'content' | 'url'>;
export type AlbumContentWithId = Pick<Album, 'title' | 'content' | 'url' | 'id'>;

export type Photo = {
  id: number;
  user_id: number;
  gallery_id: number;
  url: string;
};

export type PhotoId = Photo['id'];
export type PhotoContent = Pick<Album, 'url'>;
export type PhotoContentWithId = Pick<Photo, 'url' | 'id' | 'gallery_id'>;

export type PhotoComment = {
  id: number;
  user_id: number;
  foto_id: string;
  content: string;
};
