import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { ThemesState } from './types';
import * as api from '../api';

const initialState: ThemesState = {
  themes: [],
  error: null,
  loading: true,
};

export const loadThemes = createAsyncThunk('themes/load', () => api.fetchThemes());

const themesSlice = createSlice({
  name: 'themes',
  initialState,
  reducers: {
    stopLoading: (state) => {
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadThemes.fulfilled, (state, action) => {
        state.themes = action.payload;
      })
      .addCase(loadThemes.rejected, (state, action) => {
        state.error = action.error.message ? action.error.message : null;
      })
      .addCase(loadThemes.pending, (state) => {
        state.loading = true;
      })
  },
});
export const { stopLoading } = themesSlice.actions;
export default themesSlice.reducer;
