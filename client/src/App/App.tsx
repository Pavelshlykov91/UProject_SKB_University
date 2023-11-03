import React, { useEffect } from 'react';
import MainPage from '../features/mainPage/MainPage/MainPage';
import { useAppDispatch } from '../redux/store';
import { loadMPint } from '../features/mainPage/MainPage/reducers/MainPageSlice';
import { loadAlbums } from '../features/photoAlbum/reducer/albumsSlice';
import PhotoAlbumsPage from '../features/photoAlbum/PhotoAlbumsPage';

const App = (): JSX.Element => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadMPint());
    dispatch(loadAlbums());
  }, []);

  return (
    <div>
      {/* <MainPage /> */}
      <PhotoAlbumsPage />
    </div>
  );
};

export default App;
