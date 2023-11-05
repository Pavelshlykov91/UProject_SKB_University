// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// import * as api from '../api';
// import type { PhotosState } from './State';

// const initialState: PhotosState = {
//   photos: [],
//   error: null,
//   loading: true,
// };

// export const loadPhotos = createAsyncThunk('photos/load', () => api.fetchPhotos());

// const photosSlice = createSlice({
//   name: 'photos',
//   initialState,
//   reducers: {
//     stopLoading: (state) => {
//       state.loading = false;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(loadPhotos.fulfilled, (state, action) => {
//         state.photos = action.payload;
//       })
//       .addCase(loadPhotos.rejected, (state, action) => {
//         state.error = action.error.message ? action.error.message : null;
//       })
//       .addCase(loadPhotos.pending, (state) => {
//         state.loading = true;
//       });
//   },
// });

// export const { stopLoading } = photosSlice.actions;
// export default photosSlice.reducer;
