import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import albumsSlice from '../features/photoAlbum/reducer/albumsSlice';
import MainPageSlice from '../features/mainPage/MainPage/reducers/MainPageSlice';
import librarySlice from '../features/libraryPage/reducer/librarySlice';
import InterviewPageSlice from '../Interview/reducer/InterviewPageSlice';
import authSlice from '../features/auth/authSlice';
import photoSlice from '../features/photoAlbum/reducer/photoSlice';
import StudentSlice from '../features/Administration/reducer/StudentSlice';
import ExerciseSlice from '../features/Administration/reducer/ExerciseSlice';
import GroupSlice from '../features/Administration/reducer/GroupSlice';
import themeSlice from '../features/libraryPage/reducer/themeSlice'


const store = configureStore({
  reducer: {
    interviews: InterviewPageSlice,
    albums: albumsSlice,
    ints: MainPageSlice,
    materials: librarySlice,
    auth: authSlice,
    students:StudentSlice,
    exercises:ExerciseSlice,
    groups:GroupSlice,
    themes:themeSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export type RootState = ReturnType<typeof store.getState>;
export default store;
