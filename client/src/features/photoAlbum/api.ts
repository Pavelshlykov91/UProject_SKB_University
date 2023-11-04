import type { Album } from './type';

export const fetchAlbums = async (): Promise<Album[]> => {
  const res = await fetch('/api/gallery');

  if (res.status >= 400) {
    throw new Error(res.statusText);
  }

  return res.json();
};

export const fetchAlbumAdd = async (album: Album): Promise<Album> => {
  const res = await fetch('/api/gallery', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(album),
  });

  return res.json();
};
