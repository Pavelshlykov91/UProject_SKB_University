import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import * as api from '../api';
import type { AlbumsState } from './State';
import type { Album } from '../type';

const initialState: AlbumsState = {
  albums: [],
  error: null,
  loading: true,
};

export const loadAlbums = createAsyncThunk('albums/load', () => api.fetchAlbums());
export const addAlbum = createAsyncThunk('albums/add', (album: Album) => api.fetchAlbumAdd(album));

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
      });
  },
});

export const { stopLoading } = albumsSlice.actions;
export default albumsSlice.reducer;
