import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import type { Int } from "../type";
// import * as api from './api'
import { IntState } from "./types";



export const initialState: IntState ={
  ints: [], loading: true
} 

export const loadMPint = createAsyncThunk('int/load', () => api.fetchMPInt());
const mainPageSlice = createSlice({
  name: 'ints',
  initialState,
  reducers: {
    stopLoading: (state) => {
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(loadMPint.fulfilled, (state, action) => {
      state.ints=action.payload;
    })
  }
})

export default mainPageSlice.reducer