/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable import/prefer-default-export */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { ExercisesState } from './State';
import * as api from '../api';
import * as apiMaterial from '../Excercise/api';
import type { Exercise, ExerciseId } from '../type';
import type { addExercise } from '../Excercise/type';

const initialState: ExercisesState = {
  exercises: [],
  error: null,
  loading: true,
};

export const loadExercises = createAsyncThunk('exercise/init', api.ExerciseFetch);
export const loadExercisesMaterials = createAsyncThunk('exercisematerial/init', (id: ExerciseId) =>
  apiMaterial.ExerciseMaterialFetch(id))

// export const addExercises = createAsyncThunk('exercise/add', (Exercise: Exercise) =>
// apiMaterial.fetchExerciseAdd(),
// );
export const addExercises = createAsyncThunk('exercise/add', async (exercise: addExercise) => {
  const response = await apiMaterial.fetchExerciseAdd(exercise);
  return response;
});

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

        state.exercises = state.exercises.map((el) => ({
          ...el,
          exerciseMaterial: action.payload,
        }));
      })
      .addCase(loadExercisesMaterials.rejected, (state, action) => {
        state.error = action.error.message ? action.error.message : null;
      })
      .addCase(addExercises.fulfilled, (state, action) => {
        state.exercises = [...state.exercises, action.payload];
      })
      .addCase(addExercises.rejected, (state, action) => {
        state.error = action.error.message ? action.error.message : null;
      })
  },
});

export const { stopLoading } = ExercisesSlice.actions;
export default ExercisesSlice.reducer;
