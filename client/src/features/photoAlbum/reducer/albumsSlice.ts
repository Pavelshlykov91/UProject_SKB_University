/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable no-return-assign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import * as api from '../api';
import type { AlbumsState } from './State';
import type { AlbumContent, AlbumContentWithId, AlbumId, PhotoContentWithId } from '../type';

const initialState: AlbumsState = {
  albums: [],
  photos: [],
  error: null,
  loading: true,
};

export const loadAlbums = createAsyncThunk('albums/load', () => api.fetchAlbums());
export const addAlbum = createAsyncThunk('albums/add', (album: AlbumContent) =>
  api.fetchAlbumAdd(album),
);
export const deleteAlbum = createAsyncThunk('albums/delete', (id: AlbumId) =>
  api.fetchAlbumDelete(id),
);
export const updateAlbum = createAsyncThunk('albums/update', (album: AlbumContentWithId) =>
  api.fetchAlbumUpdate(album),
);
export const addPhoto = createAsyncThunk('photos/add', (photo: PhotoContentWithId) =>
  api.fetchPhotoAdd(photo),
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
        state.albums.push(action.payload);
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
        state.albums = state.albums.map((albumTemp) =>
          albumTemp.id === action.payload.gallery_id
            ? { ...albumTemp, Fotos: [...albumTemp.Fotos, action.payload] }
            : albumTemp,
        );
      });
  },
});

export const { stopLoading } = albumsSlice.actions;
export default albumsSlice.reducer;
