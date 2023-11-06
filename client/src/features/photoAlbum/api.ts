import type { Album, AlbumId, Photo } from './type';

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

export const fetchAlbumDelete = async (id: AlbumId): Promise<{ message: string; id: number }> => {
  const res = await fetch(`/api/gallery/${id}`, {
    method: 'DELETE',
  });
  return res.json();
};

export const fetchAlbumUpdate = async (album: Album): Promise<Album> => {
  const res = await fetch(`/api/gallery/${album.id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      title: album.title,
      content: album.content,
      url: album.url,
    }),
  });

  return res.json();
};

// export const fetchPhotos = async (): Promise<Photo[]> => {
//   const res = await fetch(`/api/gallery/${album.id}`);

//   if (res.status >= 400) {
//     throw new Error(res.statusText);
//   }

//   return res.json();
// }; 