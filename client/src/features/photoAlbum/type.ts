export type Album = {
  id: number;
  title: string;
  content: string;
  url: string;
};

export type AlbumId = Album['id'];
