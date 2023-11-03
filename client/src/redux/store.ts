import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import MainPageSlice from '../features/mainPage/MainPage/reducers/MainPageSlice';




const store = configureStore({
  reducer: {
    ints: MainPageSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export type RootState = ReturnType<typeof store.getState>;
export default store;