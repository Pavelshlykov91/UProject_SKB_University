import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { MaterialsState } from './types';
import * as api from '../api';
import type { Material, MaterialContent, MaterialID } from '../type';

const initialState: MaterialsState = {
  materials: [],
  error: null,
  loading: true,
};

export const loadMaterials = createAsyncThunk('materials/load', () => api.fetchMaterials());
export const addMaterial = createAsyncThunk('materials/add', (material: Material) =>
  api.fetchMaterialsAdd(material),
);
export const deleteMaterial = createAsyncThunk('materials/delete', (id: MaterialID) =>
  api.fetchMaterialsDelete(id),
);
export const updateMaterial = createAsyncThunk('materials/update', (material: MaterialContent) => api.fetchMaterialsUpdate(material))


const materialsSlice = createSlice({
  name: 'materials',
  initialState,
  reducers: {
    stopLoading: (state) => {
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadMaterials.fulfilled, (state, action) => {
        state.materials = action.payload;
      })
      .addCase(loadMaterials.rejected, (state, action) => {
        state.error = action.error.message ? action.error.message : null;
      })
      .addCase(loadMaterials.pending, (state) => {
        state.loading = true;
      })
      .addCase(addMaterial.fulfilled, (state, action) => {
        state.materials.push(action.payload);
      })
      .addCase(addMaterial.rejected, (state, action) => {
        state.error = action.error.message ? action.error.message : null;
      })
      .addCase(addMaterial.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteMaterial.fulfilled, (state, action) => {
        state.materials = state.materials.filter((material) => material.id !== action.payload.id);
      })
      .addCase(deleteMaterial.rejected, (state, action) => {
        state.error = action.error.message ? action.error.message : null;
      })
      .addCase(deleteMaterial.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateMaterial.fulfilled, (state,action)=>{
        state.materials = state.materials.map((material)=>material.id === action.payload.id ? (material = action.payload):material,)
      })
      .addCase(updateMaterial.rejected, (state, action) => {
        state.error = action.error.message ? action.error.message : null;
      })
      .addCase(updateMaterial.pending, (state) => {
        state.loading = true;
      })
  },
});

export const { stopLoading } = materialsSlice.actions;
export default materialsSlice.reducer;
