/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import type {
  Album,
  AlbumContentWithOutUrl,
  AlbumId,
  Photo,
  PhotoContentWithIdAndId,
} from './type';

export const fetchAlbums = async (): Promise<Album[]> => {
  const res = await fetch('/api/gallery');

  if (res.status >= 400) {
    throw new Error(res.statusText);
  }

  return res.json();
};

export const fetchAlbumAdd = async (album: FormData): Promise<Album> => {
  const res = await fetch('/api/gallery', {
    method: 'POST',
    body: album,
  });

  return res.json();
};

export const fetchAlbumDelete = async (id: AlbumId): Promise<{ id: number }> => {
  const res = await fetch(`/api/gallery/${id}`, {
    method: 'DELETE',
  });
  return res.json();
};

export const fetchAlbumUpdate = async (album: AlbumContentWithOutUrl): Promise<Album> => {
  const res = await fetch(`/api/gallery/${album.id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      title: album.title,
      content: album.content,
    }),
  });

  return res.json();
};

export const fetchPhotoAdd = async ({
  data,
  id,
}: {
  data: FormData;
  id: number;
}): Promise<Photo[]> => {
  const res = await fetch(`/api/gallery/${id}/photo`, {
    method: 'POST',
    body: data,
  });
  const dataTest = await res.json();

  return dataTest;
};

export const fetchPhotoDelete = async (
  photo: PhotoContentWithIdAndId,
): Promise<{ id: number; gallery_id: number }> => {
  const res = await fetch(`/api/gallery/${photo.gallery_id}/photo/${photo.id}`, {
    method: 'DELETE',
  });

  return res.json();
};
