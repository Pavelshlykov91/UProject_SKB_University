import React, {useState} from 'react';
import { addEvents } from './reducers/LKSlice';
import { useAppDispatch } from '../../redux/store';

export default function LKAddevents() {
  const dispatch = useAppDispatch()
  const onHandleSubmit:React.FormEventHandler<HTMLFormElement> = async (e): Promise<void> => {
    e.preventDefault();
    dispatch(addEvents({data, name, theme, address, time}))
    setDay('')
    setMonth('')
    setYear('')
    setName('')
    setTheme('')
    setCity('')
    setAddress('')
    setTime('')
  }

  const [day, setDay]=useState('')
  const [month, setMonth]=useState('')
  const [year, setYear]=useState('')
  const [name, setName]=useState('')
  const [theme, setTheme]=useState('')
  const [city, setCity]=useState('')
  const [address1, setAddress]=useState('')
  const [time, setTime]=useState('')
  const data = `${day}.${month}.${year}`
  const address=`${city}, ${address1}`

  

  return (
    <div>
      <div className="LK_event_header">Мероприятия</div>
      <div className="LK_event_add_event">
        <form className="LK_event_add_event_form" onSubmit={onHandleSubmit}>
          <div className="LK_event_add_event_date">
            <input type='number' placeholder='День' value={day} onChange={(e) => setDay(e.target.value)} className="LK_event_add_event_day"></input>
            <input type='number' placeholder='Месяц' value={month} onChange={(e) => setMonth(e.target.value)} className="LK_event_add_event_month"></input>
            <input type='number' placeholder='Год' value={year} onChange={(e) => setYear(e.target.value)} className="LK_event_add_event_year"></input>
            <input type='number' placeholder='Время' value={time} onChange={(e) => setTime(e.target.value)} className='LK_event_add_event_time'></input>
          </div>
          <div>
            <input placeholder='Название' value={name} onChange={(e) => setName(e.target.value)} className="LK_event_add_event_name"></input>
            <input placeholder='Тема' value={theme} onChange={(e) => setTheme(e.target.value)} className="LK_event_add_event_theme"></input>
            <input placeholder='Город' value={city} onChange={(e) => setCity(e.target.value)} className="LK_event_add_event_city"></input>
            <input placeholder='Адрес' value={address1} onChange={(e) => setAddress(e.target.value)} className="LK_event_add_event_address"></input>
          </div>
          {day && month && year && address1 && name && theme && city && time && <button className='LK_event_add_form_bttn'/>}
        </form>
      </div>
    </div>
  );
}
