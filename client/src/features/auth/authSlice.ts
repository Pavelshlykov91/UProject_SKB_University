/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable import/no-duplicates */
/* eslint-disable @typescript-eslint/default-param-last */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { AuthState, UserWithoutId, UserSign } from './type';
import * as api from './api';

const initialState: AuthState = {
  user: undefined,
  error: null,
};

export const checkUser = createAsyncThunk('auth/check', () => api.fetchCheckUser());

export const signIn = createAsyncThunk('auth/sign-in', (user: UserSign) =>
  api.fetchSignIn(user),
);

export const logOut = createAsyncThunk('auth/logout', ()=>
api.fetchLogOut()
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: { logOut: (state) => {
    state.user = undefined;
  },},
  extraReducers: (builder) => {
    builder
      .addCase(checkUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
      })
      .addCase(checkUser.rejected, (state, action) => {
        state.error = action.error.message ? action.error.message : null;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.error = action.error.message ? action.error.message : null;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.user = undefined;
      });
  },
});

export default authSlice.reducer;