/* eslint-disable no-else-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable no-return-assign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import * as api from '../api';
import type { AlbumsState } from './State';
import type { AlbumContentWithOutUrl, AlbumId, PhotoContentWithIdAndId } from '../type';

const initialState: AlbumsState = {
  albums: [],
  photos: [],
  error: null,
  loading: true,
};

export const loadAlbums = createAsyncThunk('albums/load', () => api.fetchAlbums());

export const addAlbum = createAsyncThunk('albums/add', (album: FormData) =>
  api.fetchAlbumAdd(album),
);
export const deleteAlbum = createAsyncThunk('albums/delete', (id: AlbumId) =>
  api.fetchAlbumDelete(id),
);
export const updateAlbum = createAsyncThunk('albums/update', (album: AlbumContentWithOutUrl) =>
  api.fetchAlbumUpdate(album),
);
export const addPhoto = createAsyncThunk('photos/add', (value: { data: FormData; id: number }) =>
  api.fetchPhotoAdd(value),
);
export const deletePhoto = createAsyncThunk('photos/delete', (photo: PhotoContentWithIdAndId) =>
  api.fetchPhotoDelete(photo),
);

const albumsSlice = createSlice({
  name: 'albums',
  initialState,
  reducers: {
    stopLoading: (state) => {
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadAlbums.fulfilled, (state, action) => {
        state.albums = action.payload;
      })
      .addCase(loadAlbums.rejected, (state, action) => {
        state.error = action.error.message ? action.error.message : null;
      })
      .addCase(loadAlbums.pending, (state) => {
        state.loading = true;
      })
      .addCase(addAlbum.fulfilled, (state, action) => {
        state.albums = [...state.albums, action.payload];
      })
      .addCase(addAlbum.rejected, (state, action) => {
        state.error = action.error.message ? action.error.message : null;
      })
      .addCase(addAlbum.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteAlbum.fulfilled, (state, action) => {
        state.albums = state.albums.filter((album) => album.id !== action.payload.id);
      })
      .addCase(deleteAlbum.rejected, (state, action) => {
        state.error = action.error.message ? action.error.message : null;
      })
      .addCase(deleteAlbum.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateAlbum.fulfilled, (state, action) => {
        state.albums = state.albums.map((album) =>
          album.id === action.payload.id ? (album = action.payload) : album,
        );
      })
      .addCase(updateAlbum.rejected, (state, action) => {
        state.error = action.error.message ? action.error.message : null;
      })
      .addCase(updateAlbum.pending, (state) => {
        state.loading = true;
      })
      .addCase(addPhoto.fulfilled, (state, action) => {
        state.albums = state.albums.map((album) => {
          if (album.id === action.payload[0].gallery_id && album.Fotos) {
            return { ...album, Fotos: [...album.Fotos, ...action.payload] };
          } else if (album.id === action.payload[0].gallery_id) {
            return { ...album, Fotos: [...action.payload] };
          } else {
            return album;
          }
        });
      })
      .addCase(deletePhoto.fulfilled, (state, action) => {
        state.albums = state.albums.map((album) =>
          album.id === action.payload.gallery_id
            ? { ...album, Fotos: album.Fotos.filter((photo) => photo.id !== action.payload.id) }
            : album,
        );
      });
  },
});

export const { stopLoading } = albumsSlice.actions;
export default albumsSlice.reducer;
