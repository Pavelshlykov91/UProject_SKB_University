import React, { useState } from 'react';
import LKmain from './LKmain';
import LKevents from './LKEvents';
import './styles/index.css';

export default function LK():JSX.Element {
  const [main, setMain] = useState(true);
  const [events, setEvents] = useState(false);

  const onHandleNavigationMain = () => {
    setEvents(false);
    setMain(true)
  }

  const onHandleNavigationEvents = () => {
    setMain(false)
    setEvents(true);
  }


  
  return (
    <div>
      <div>Личный кабинет</div>
      <div className="LK_headers">
        <div onClick={onHandleNavigationMain}>Личная информация</div>
        <div onClick={onHandleNavigationEvents}>Мероприятия</div>
      </div>
      {main && <LKmain />}
      {events && <LKevents/>}

    </div>
  );
}
