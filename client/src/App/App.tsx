import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from '../features/mainPage/MainPage/MainPage';
import { useAppDispatch } from '../redux/store';
import { loadMPint } from '../features/mainPage/MainPage/reducers/MainPageSlice';
import PhotoAlbumsPage from '../features/photoAlbum/PhotoAlbumsPage';
import { loadInterview } from '../features/Interview/reducer/InterviewPageSlice';
import InterviewItem from '../features/Interview/InterviewItem';
import Navbar from '../features/navbar/Navbar';
import InterviewPage from '../features/Interview/InterviewPage';
import LibraryPage from '../features/libraryPage/LibraryPage';
import { loadMaterials } from '../features/libraryPage/reducer/librarySlice';
import { loadAlbums } from '../features/photoAlbum/reducer/albumsSlice';
import PhotoAlbumPage from '../features/photoAlbum/PhotoAlbumPage';
import SignIn from '../features/auth/Sign-in';
import LibraryItemPage from '../features/libraryPage/LibraryItemPage';
import AddLibraryForm from '../features/libraryPage/AddLibraryForm';
import AdminMain from '../features/Administration/AdminMain';
import * as apiAdmin from '../features/Administration/api';
import StudentCard from '../features/Administration/Student/StudentCard';
import { loadThemes } from '../features/libraryPage/reducer/themeSlice';
import ForumPage from '../features/forumPage/ForumPage';
import { loadForums } from '../features/forumPage/reducer/forumSlice';
import ForumItemPage from '../features/forumPage/ForumItemPage';
import { loadComments } from '../features/forumPage/reducer/commentSlice'
import LK from '../features/LK/LK';
import { loadEvents } from '../features/LK/reducers/LKSlice';
import ExercisesSt from '../features/ExercisesStudent/ExercisesSt';
import ExerciseItemSt from '../features/ExercisesStudent/ExerciseItemSt';



const App = (): JSX.Element => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(loadMPint());
    dispatch(loadInterview());
    dispatch(loadMaterials());
    dispatch(loadAlbums());
    dispatch(loadForums());
    dispatch(loadComments())
    dispatch(loadThemes())
    dispatch(loadEvents())


  }, []);

  useEffect(() => {
    apiAdmin.UserFetch().then((data) => dispatch({ type: 'user/init', payload: data }));
  }, []);

  return (
    <Routes>
      <Route index path="/" element={<SignIn />} />
      <Route path="/" element={<Navbar />}>
        <Route path="/myaccount" element={<LK />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/gallery" element={<PhotoAlbumsPage />} />
        <Route path="/gallery/:albumId" element={<PhotoAlbumPage />} />
        <Route path="/administration" element={<AdminMain />} />
        <Route path="/interviews" element={<InterviewPage />} />
        <Route path="/interviews/:interviewId" element={<InterviewItem />} />
        <Route path="/library" element={<LibraryPage />} />
        <Route path="/library/:materialId" element={<LibraryItemPage />} />
        <Route path="/library/add-form" element={<AddLibraryForm />} />
        <Route path="/exercises" element={<ExercisesSt />} />
        <Route path="/exercises/:exerciseId" element={<ExerciseItemSt/>} />
        <Route path="/administration/:studentId" element={<StudentCard />} />
        <Route path="/forum" element={<ForumPage />} />
        <Route path="/forum/:forumId" element={<ForumItemPage />} />
      </Route>
    </Routes>
  );
};

export default App;
