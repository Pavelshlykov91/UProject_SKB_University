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
import PhotoAlbumPage from '../features/photoAlbum/PhotoAlbumPage';
import SignIn from '../features/auth/Sign-in';
import { checkUser } from '../features/auth/authSlice';
import LibraryItemPage from '../features/libraryPage/LibraryItemPage';
import AddLibraryForm from '../features/libraryPage/AddLibraryForm';

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
      <Route index path='/auth' element={<SignIn />} />
      <Route path="/" element={<Navbar />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/gallery" element={<PhotoAlbumsPage />} />
        <Route path="/gallery/:albumId" element={<PhotoAlbumPage />} />
        <Route path="/interview" element={<InterviewPage />} />
        <Route path="/library" element={<LibraryPage />} />
        <Route path="/library/:materialId" element={<LibraryItemPage />} />
        <Route path="/library/add-form" element={<AddLibraryForm />} />
      </Route>
    </Routes>
  );
};

export default App;
