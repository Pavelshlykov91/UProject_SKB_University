import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { ForumAnswersState } from './types';
import * as api from '../api';

const initialState: ForumAnswersState = {
  comments: [],
  error: null,
  loading: true,
};

export const loadComments = createAsyncThunk('comments/load', () => api.fetchComments());

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    stopLoading: (state) => {
      state.loading = false
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(loadComments.fulfilled, (state,action) => {
      state.comments = action.payload
    })
    .addCase(loadComments.rejected, (state, action) => {
      state.error = action.error.message ? action.error.message : null;
    })
    .addCase(loadComments.pending, (state) => {
      state.loading = true;
  })
  }
})


export const { stopLoading } = commentsSlice.actions;
export default commentsSlice.reducer;