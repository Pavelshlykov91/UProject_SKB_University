import { InterviewState } from "./type";
import * as api from './api'
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const initialState: InterviewState ={
  interviews: [], loading: true, error: null
} 

export const loadInterview = createAsyncThunk('interview/load', () => api.fetchInterviews());
const InterviewPageSlice = createSlice({
  name: 'interviews',
  initialState,
  reducers: {
    stopLoading: (state) => {
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(loadInterview.fulfilled, (state, action) => {
      state.interviews=action.payload;
    })
  }
})

export default InterviewPageSlice.reducer