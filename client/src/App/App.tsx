
import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom';
import MainPage from '../features/mainPage/MainPage/MainPage'
import { useAppDispatch } from '../redux/store'
import { loadMPint } from '../features/mainPage/MainPage/reducers/MainPageSlice';
import PhotoAlbumsPage from '../features/photoAlbum/PhotoAlbumsPage';
import { loadInterview } from '../Interview/reducer/InterviewPageSlice';
import Navbar from '../features/navbar/Navbar';
import InterviewPage from '../Interview/InterviewPage';
import LibraryPage from '../features/libraryPage/LibraryPage';

const App = ():JSX.Element => {
const dispatch = useAppDispatch();
useEffect(() => {
  dispatch(loadMPint());
  dispatch(loadInterview())
}, [])

  return (
    <Routes>
    <Route path="/" element={<Navbar />}>
      <Route path="/" element={<MainPage/>} />
      <Route path="/gallery" element={<PhotoAlbumsPage/>} />
      <Route path="/interview" element={<InterviewPage />} />
      <Route path="/library" element={<LibraryPage />} />
    </Route>
  </Routes>

  )
}


export default App;
