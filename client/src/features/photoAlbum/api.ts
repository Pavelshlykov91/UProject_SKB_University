import type { Album } from './type';

export const fetchAlbums = async (): Promise<Album[]> => {
  const res = await fetch('/api/gellery');

  if (res.status >= 400) {
    throw new Error(res.statusText);
  }
  return res.json();
};
