/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'

export default function MPNotifItem() {
  const events = useSelector((store:RootState)=> store.events.events)
  return (
    <div>
        <div className='MP_notif_event_header'>Ближайшие мероприятия</div>
      {events.map((el)=> (
        <>
        <div>{el.name}</div>
    <div>{el.theme}</div>
    <div>Дата проведения: {el.data}, {el.time}</div>
    <div>{el.address}</div>
        </>
      ))}
    </div>
  )
}
