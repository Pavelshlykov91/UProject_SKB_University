import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import * as api from '../api';
import type { AlbumsState } from './type';

const initialState: AlbumsState = {
  albums: [],
  error: null,
  loading: true,
};

export const loadAlbums = createAsyncThunk('albums/load', () => api.fetchAlbums());

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
      });
  },
});

export const { stopLoading } = albumsSlice.actions;
export default albumsSlice.reducer;
