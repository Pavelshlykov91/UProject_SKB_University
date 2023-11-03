import React, { useEffect } from 'react';
// import MainPage from '../features/mainPage/MainPage/MainPage';
import { useAppDispatch } from '../redux/store';
import { loadMPint } from '../features/mainPage/MainPage/reducers/MainPageSlice';
// import PhotoAlbumsPage from '../features/photoAlbum/PhotoAlbumsPage';
import LibraryPage from '../features/libraryPage/LibraryPage';
import { loadMaterials } from '../features/libraryPage/reducer/librarySlice';


const App = ():JSX.Element => {
const dispatch = useAppDispatch();
useEffect(() => {
  dispatch(loadMPint());
  dispatch(loadInterview())
  dispatch(loadMaterials());
}, [])


  return (
    <div>
      <LibraryPage />
    </div>
  );
};

export default App;
