import React, { useEffect } from 'react'
import MainPage from '../features/mainPage/MainPage/MainPage'
import { useAppDispatch } from '../redux/store'
import { loadMPint } from '../features/mainPage/MainPage/reducers/MainPageSlice';

const App = ():JSX.Element => {
const dispatch = useAppDispatch();
useEffect(() => {
  dispatch(loadMPint());
}, [])

  return (
    <div>
      <MainPage/>
    </div>
  )
}

export default App