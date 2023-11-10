import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { ForumsState } from './types';
import type { Forum, ForumID } from '../type';
import * as api from '../api';

export const initialState: ForumsState = {
  forums: [],
  comments:[],
  error: null,
  loading: true,
};

export const loadForums = createAsyncThunk('forums/load', () => api.fetchForums());
export const addForum = createAsyncThunk('forums/add', (forum: Forum) => api.fetchForumsAdd(forum));
export const deleteForum = createAsyncThunk('forums/delete', (id: ForumID) =>
  api.fetchForumDelete(id),
);
export const updateForum = createAsyncThunk('forums/update', (forum: Forum) =>
  api.fetchForumUpdate(forum),
);

const forumsSlice = createSlice({
  name: 'forums',
  initialState,
  reducers: {
    stopLoading: (state) => {
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadForums.fulfilled, (state, action) => {
        state.forums = action.payload;
      })
      .addCase(loadForums.rejected, (state, action) => {
        state.error = action.error.message ? action.error.message : null;
      })
      .addCase(loadForums.pending, (state) => {
        state.loading = true;
      })
      .addCase(addForum.fulfilled, (state, action) => {
        state.forums.push(action.payload);
      })
      .addCase(addForum.rejected, (state, action) => {
        state.error = action.error.message ? action.error.message : null;
      })
      .addCase(addForum.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteForum.fulfilled, (state, action) => {
        state.forums = state.forums.filter((forum) => forum.id !== action.payload.id);
      })
      .addCase(deleteForum.rejected, (state, action) => {
        state.error = action.error.message ? action.error.message : null;
      })
      .addCase(deleteForum.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateForum.fulfilled, (state, action) => {
        state.forums = state.forums.map((forum) =>
          forum.id === action.payload.id ? action.payload : forum,
        );
      })
      .addCase(updateForum.rejected, (state, action) => {
        state.error = action.error.message ? action.error.message : null;
      })
      .addCase(updateForum.pending, (state) => {
        state.loading = true;
      });
  },
});
export const { stopLoading } = forumsSlice.actions;
export default forumsSlice.reducer;
