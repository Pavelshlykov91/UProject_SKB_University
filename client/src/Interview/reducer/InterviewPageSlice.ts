import { Interview, InterviewState } from "./type";
import * as api from './api'
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const initialState: InterviewState ={
  interviews: [], loading: true, error: null
} 

export const loadInterview = createAsyncThunk('interviews/load', () => api.fetchInterviews());
export const addInterview = createAsyncThunk('interviews/add', (interview:Interview) => api.fetchInterviewAdd(interview));
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
    .addCase(addInterview.fulfilled, (state, action) => {
      state.interviews.push(action.payload);
    })
  }
})



export default InterviewPageSlice.reducer