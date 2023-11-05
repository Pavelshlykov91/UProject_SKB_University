import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { MaterialsState } from './types';
import * as api from '../api'

const initialState: MaterialsState = {
  materials: [],
};

export const loadMaterials = createAsyncThunk('materials/load', ()=> api.fethMaterials() )

const materialsSlice = createSlice({
  name: 'materials',
  initialState,
  reducers: {
    
  }
})