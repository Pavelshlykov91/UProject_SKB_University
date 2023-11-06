/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable import/prefer-default-export */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { UsersState } from "./State";
import * as api from '../api'


const initialState:UsersState = {
    users:[],
    error:null,
    loading:true,
}

export const loadUsers = createAsyncThunk('user/init', ()=>api.UserFetch())

const StudentsSlice = createSlice({
    name: 'students',
    initialState,
    reducers:{
        stopLoading: (state) => {
            state.loading = false;
          },
    },
    extraReducers: (builder) => {
    builder
    .addCase(loadUsers.fulfilled, (state, action) => {  
        state.users = action.payload;
      })
    .addCase(loadUsers.rejected, (state, action) => { 
        state.error= action.error.message ? action.error.message : null;
      })    
    }
})


export const { stopLoading } = StudentsSlice.actions;
export default StudentsSlice.reducer;