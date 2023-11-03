
import React, { useEffect } from 'react'
import MainPage from '../features/mainPage/MainPage/MainPage'
import { useAppDispatch } from '../redux/store'
import { loadMPint } from '../features/mainPage/MainPage/reducers/MainPageSlice';
import { loadInterview } from '../Interview/reducer/InterviewPageSlice';
const App = ():JSX.Element => {
const dispatch = useAppDispatch();
useEffect(() => {
  dispatch(loadMPint());
  dispatch(loadInterview())
}, [])

  return (
    <div>
      <MainPage/>
    </div>
  )
}


export default App;
