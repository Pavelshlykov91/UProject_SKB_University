import React from 'react'
import MPInterviewItem from './MPInterviewItem'
import MPNotifItem from './MPNotifItem'
import MPGallery from './MPGallery'

export default function MainPage() {
  return (
    <div>
      <div>
        <img/> // main img
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
