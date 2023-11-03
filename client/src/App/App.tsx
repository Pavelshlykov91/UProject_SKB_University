import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from '../features/mainPage/MainPage/MainPage';
import { useAppDispatch } from '../redux/store';
import { loadMPint } from '../features/mainPage/MainPage/reducers/MainPageSlice';
import PhotoAlbumsPage from '../features/photoAlbum/PhotoAlbumsPage';
import { loadInterview } from '../Interview/reducer/InterviewPageSlice';
import Navbar from '../features/navbar/Navbar';
import InterviewPage from '../Interview/InterviewPage';
import LibraryPage from '../features/libraryPage/LibraryPage';
import { loadMaterials } from '../features/libraryPage/reducer/librarySlice';
import { loadAlbums } from '../features/photoAlbum/reducer/albumsSlice';
import AddAlbumsPage from '../features/photoAlbum/AddAlbumsPage';
import PhotoAlbumPage from '../features/photoAlbum/PhotoAlbumPage';

const App = (): JSX.Element => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(loadMPint());
    dispatch(loadInterview());
    dispatch(loadMaterials());
    dispatch(loadAlbums());
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/gallery" element={<PhotoAlbumsPage />} />
        <Route path="/gallery/add-form" element={<AddAlbumsPage />} />
        <Route path="/gallery/:albumId" element={<PhotoAlbumPage />} />
        <Route path="/interview" element={<InterviewPage />} />
        <Route path="/library" element={<LibraryPage />} />
      </Route>
    </Routes>
  );
};

export default App;
