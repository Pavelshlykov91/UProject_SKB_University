/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable import/prefer-default-export */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { ExercisesState } from "./State";
import * as api from '../api'


const initialState:ExercisesState = {
    exercises:[],
    error:null,
    loading:true,
}

export const loadExercises = createAsyncThunk('exercise/init', api.ExerciseFetch)

const ExercisesSlice = createSlice({
    name: 'exercises',
    initialState,
    reducers:{
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
        state.error= action.error.message ? action.error.message : null;
      })    
    }
})


export const { stopLoading } = ExercisesSlice.actions;
export default ExercisesSlice.reducer;