/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable import/prefer-default-export */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { ExercisesState } from './State';
import * as api from '../api';
import * as apiMaterial from '../Excercise/api';
import type { ExerciseId } from '../type';

const initialState: ExercisesState = {
  exercises: [],
  error: null,
  loading: true,
};

export const loadExercises = createAsyncThunk('exercise/init', api.ExerciseFetch);
export const loadExercisesMaterials = createAsyncThunk('exercisematerial/init', (id: ExerciseId) =>
  apiMaterial.ExerciseMaterialFetch(id),
);
// export const addAnswers = createAsyncThunk('answer/add', (answer:Answer) => api.AnswerFetch(answer));


const ExercisesSlice = createSlice({
  name: 'exercises',
  initialState,
  reducers: {
    stopLoading: (state) => {
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadExercises.fulfilled, (state, action) => {
        state.exercises = action.payload;
      })
      .addCase(loadExercises.rejected, (state, action) => {
        state.error = action.error.message ? action.error.message : null;
      })
      .addCase(loadExercisesMaterials.fulfilled, (state, action) => {
        console.log(action.payload);

        state.exercises = state.exercises.map((el) => ({
          ...el,
          exerciseMaterial: action.payload,
        }));
      })
      .addCase(loadExercisesMaterials.rejected, (state, action) => {
        state.error = action.error.message ? action.error.message : null;
      });
  },
});

export const { stopLoading } = ExercisesSlice.actions;
export default ExercisesSlice.reducer;
