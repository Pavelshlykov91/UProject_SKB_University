
import React, { useEffect } from 'react'
import MainPage from '../features/mainPage/MainPage/MainPage'
import { useAppDispatch } from '../redux/store'
import { loadMPint } from '../features/mainPage/MainPage/reducers/MainPageSlice';
// import PhotoAlbumsPage from '../features/photoAlbum/PhotoAlbumsPage';
import { loadInterview } from '../Interview/reducer/InterviewPageSlice';
import InterviewPage from '../Interview/InterviewPage';
import { Routes, Route } from 'react-router-dom';
import InterviewItem from '../Interview/InterviewItem';

const App = ():JSX.Element => {
const dispatch = useAppDispatch();
useEffect(() => {
  dispatch(loadMPint());
  dispatch(loadInterview())
}, [])



  return (
    <div>
      <Routes>
      <Route path='/' element={<MainPage/>}/>
      <Route path='/interviews' element={<InterviewPage/>}/>
      <Route path='/interviews/:interviewId' element={<InterviewItem/>}/>
      </Routes>
      
 {/* <PhotoAlbumsPage />  */}
    </div>
  )
}


export default App;
