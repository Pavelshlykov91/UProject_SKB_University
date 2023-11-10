import React from 'react';
import './styles/style.css';

export default function HeaderBlock(): JSX.Element {
  return (
    <div className="header-block-box">
      <img src="../../../public/img/ohota-na-kalidonskogo-veprya-Rubens.jpg" alt="" />
      <p className="gallery-text">
        <h2>Галерея</h2>
        <p>
          Нам нравятся идеи, приносящие пользу клиентам, Банку и сотрудникам. Но оживают они только
          в процессе их дисциплинированной реализации. Мы не боимся много работать, учиться,
          преодолевать препятствия и решать сложные задачи. Мы не берёмся за всё подряд, фокусируясь
          на стратегических приоритетах. Мы умеем эффективно работать в команде и гордимся нашими
          достижениями.
        </p>
      </p>
    </div>
  );
}
