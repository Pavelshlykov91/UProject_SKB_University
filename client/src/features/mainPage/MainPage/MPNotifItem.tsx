/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'

export default function MPNotifItem() {
  const events = useSelector((store:RootState)=> store.events.events)
  return (
    <div className='MP_notif_event_conttainer'>
        <div className='MP_notif_event_header'>Ближайшие мероприятия</div>
        <div className='MP_notif_event_block'>
      {events.map((el)=> (
        <div className='MP_notifka'>
        <div className='MP_notif_event_item'>{el.name}</div>
    <div className='MP_notif_event_item'>{el.theme}</div>
    <div className='MP_notif_event_item'>Дата проведения: {el.data}, {el.time}</div>
    <div className='MP_notif_event_item'>{el.address}</div>
        </div>
      ))}
      </div>
    </div>
  )
}
