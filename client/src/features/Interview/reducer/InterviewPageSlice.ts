/* eslint-disable no-return-assign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { Interview, InterviewComment, InterviewId, InterviewState } from './type';
import * as api from './api';

export const initialState: InterviewState = {
  interviews: [],
  comments: [],
  reactions: [],
  loading: true,
  error: null,
};

export const loadInterview = createAsyncThunk('interviews/load', () => api.fetchInterviews());
export const loadInterviewcomm = createAsyncThunk(
  'interviewscomm/load',
  (interviewId: InterviewId) => api.fetchInterviewscomm(interviewId),
);
export const addInterviewcomm = createAsyncThunk(
  'interviewscomm/add',
  (comment: InterviewComment) => api.fetchInterviewscommAdd(comment),
);
export const addInterview = createAsyncThunk('interviews/add', (interview: Interview) =>
  api.fetchInterviewAdd(interview),
);
export const updInterview = createAsyncThunk('interviews/upd', (interview: Interview) =>
  api.fetchInterviewUpd(interview),
);
// export const loadReactions = createAsyncThunk('reactions/load', () => api.fetchReactions());
// export const addReaction = createAsyncThunk('reactions/change', (id:EmojiId) => api.fetchReactionschange(id));
export const deleteInterview = createAsyncThunk('interview/delete', (id: InterviewId) => api.fetchDeleteInterview(id));


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
        state.interviews = action.payload;
      })
      .addCase(addInterview.fulfilled, (state, action) => {
        state.interviews.push(action.payload);
      })
      .addCase(loadInterviewcomm.fulfilled, (state, action) => {
        state.comments = action.payload;
      })
      .addCase(addInterviewcomm.fulfilled, (state, action) => {        
        state.comments.push(action.payload);
      })
      .addCase(deleteInterview.fulfilled, (state, action) => {
        state.interviews = state.interviews.filter((interview) => interview.id !== action.payload.id);
      })
      .addCase(updInterview.fulfilled, (state, action) => {

        state.interviews = state.interviews.map((int) =>
          int.id === action.payload.id ? (int = action.payload) : int,
        );
      })
      // .addCase(loadReactions.fulfilled, (state, action) => {
      //   const currentreactions = state.reactions.map((el) => {
      //     const getpayload = action.payload.find((ap) => ap.interview_id === el.interview_id);
      //     if (getpayload) {
      //       return {
      //         ...el,
      //         emoji: getpayload.Emoji,
      //         count: getpayload.count,
      //       };
      //     }
      //     return el;
      //   });
      
        // state.reactions = currentreactions;
      
  },
});

export default InterviewPageSlice.reducer;
