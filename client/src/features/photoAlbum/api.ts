/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import type {
  Album,
  AlbumContent,
  AlbumContentWithId,
  AlbumId,
  Photo,
  PhotoContentWithId,
  PhotoContentWithIdAndId,
  PhotoId,
} from './type';

export const fetchAlbums = async (): Promise<Album[]> => {
 
  
  const res = await fetch('/api/gallery');

  if (res.status >= 400) {
    throw new Error(res.statusText);
  }
 const data = res.json()
 console.log(data);
  return data;
};

export const fetchAlbumAdd = async (album: AlbumContent): Promise<Album> => {
  const res = await fetch('/api/gallery', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(album),
  });

  return res.json();
};

export const fetchAlbumDelete = async (id: AlbumId): Promise<{ id: number }> => {
  const res = await fetch(`/api/gallery/${id}`, {
    method: 'DELETE',
  });
  return res.json();
};

export const fetchAlbumUpdate = async (album: AlbumContentWithId): Promise<Album> => {
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

export const fetchPhotoAdd = async (photo: PhotoContentWithId): Promise<Photo> => {
  const res = await fetch(`/api/gallery/${photo.gallery_id}/photo`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(photo),
  });

  return res.json();
};

export const fetchPhotoDelete = async (
  photo: PhotoContentWithIdAndId,
): Promise<{ id: number; gallery_id: number }> => {
  const res = await fetch(`/api/gallery/${photo.gallery_id}/photo/${photo.id}`, {
    method: 'DELETE',
  });
  return res.json();
};
