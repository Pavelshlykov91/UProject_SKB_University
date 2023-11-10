import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import LKAddevents from './LKAddevents'
import LKEventItem from './LKEventItem'

export default function LKevents() {
  const user = useSelector((store:RootState)=> store.auth.user)
  const events = useSelector((store:RootState)=> store.events.events)
  return (
    <div className='LK_deletemodal'>
      {user?.role==='преподаватель' && <LKAddevents/>}
      {events.map((el) => (
        <>
        <LKEventItem key={el.id} el={el}/>
        </>
      ))}
    </div>
  )
}
