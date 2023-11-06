/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable import/prefer-default-export */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { GroupState } from "./State";
import * as api from '../api'


const initialState:GroupState = {
    groups:[],
    error:null,
    loading:true,
}

export const loadGroups = createAsyncThunk('group/init', api.GroupFetch)

const GroupSlice = createSlice({
    name: 'groups',
    initialState,
    reducers:{
        stopLoading: (state) => {
            state.loading = false;
          },
    },
    extraReducers: (builder) => {
    builder
    .addCase(loadGroups.fulfilled, (state, action) => {  
        state.groups = action.payload;
      })
    .addCase(loadGroups.rejected, (state, action) => { 
        state.error= action.error.message ? action.error.message : null;
      })    
    }
})


export const { stopLoading } = GroupSlice.actions;
export default GroupSlice.reducer;