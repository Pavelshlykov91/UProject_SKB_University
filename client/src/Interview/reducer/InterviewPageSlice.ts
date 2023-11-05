import { Interview, InterviewComment, InterviewId, InterviewState } from "./type";
import * as api from './api'
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const initialState: InterviewState ={
  interviews: [], comments: [], loading: true, error: null
} 


export const loadInterview = createAsyncThunk('interviews/load', () => api.fetchInterviews());
export const loadInterviewcomm = createAsyncThunk('interviewscomm/load', (interviewId:InterviewId) => api.fetchInterviewscomm(interviewId));
export const addInterviewcomm = createAsyncThunk('interviews/add', (comment:InterviewComment) => api.fetchInterviewscommAdd(comment));
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
    .addCase(loadInterviewcomm.fulfilled, (state, action) => {
      state.comments=action.payload;
    })
  }
})




export default InterviewPageSlice.reducer