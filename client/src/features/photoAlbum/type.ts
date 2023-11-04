export type Album = {
  id: number;
  user_id?: number;
  foto_id?: number;
  title: string;
  content: string;
  url: string;
};

export type AlbumId = Album['id'];

export type Photo = {
  id: number;
  user_id: number;
  gallery_id: number;
  comment_id: number;
  url: string;
};

export type PhotoId = Photo['id'];

export type PhotoComment = {
  id: number;
  user_id: number;
  content: string;
};
