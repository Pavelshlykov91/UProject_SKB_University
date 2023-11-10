/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react'
import './index.css'
import MPInterviewItem from './MPInterviewItem'
import MPNotifItem from './MPNotifItem'
import MPGallery from './MPGallery'

export default function MainPage() {
  return (
    <div>
      <div>
        <img className='mainpage_banner' src='./../../../../public/img//kkkk.jpg'/> 
      </div>
      <div className='mainpage_desc'>
      Мы создаем уникальное образовательное пространство, где каждый сотрудник может раскрыть свой потенциал, обрести новые знания и навыки, необходимые для уверенного соперничества в быстро меняющемся мире финансов.
      </div>
      <div className='mp__interview__cont'> 
          <MPInterviewItem/>
      </div>
      <div className='mp__notif__cont'>
          <MPNotifItem/>
      </div>
      <div className='mp__gallery__cont'>
          <MPGallery/>
      </div>
    </div>
  )
}
