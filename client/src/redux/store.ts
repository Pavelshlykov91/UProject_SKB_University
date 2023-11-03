import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import albumsSlice from '../features/photoAlbum/reducer/albumsSlice';
import MainPageSlice from '../features/mainPage/MainPage/reducers/MainPageSlice';
import librarySlice from '../features/libraryPage/reducer/librarySlice'
import InterviewPageSlice from '../Interview/reducer/InterviewPageSlice';


const store = configureStore({
  reducer: {
    interviews: InterviewPageSlice
    albums: albumsSlice,
    ints: MainPageSlice,
    materials: librarySlice
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export type RootState = ReturnType<typeof store.getState>;
export default store;
