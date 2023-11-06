import React from 'react';
import './styles/style.css';

export default function HeaderBlock(): JSX.Element {
  return (
    <div className="header-block-box">
      <img src="https://art-nto.ru/800/600/https/allpainters.ru/wp-content/uploads/2014/11/ohota-na-kalidonskogo-veprya-Rubens.jpg" alt="" />
      <p className="gallery-text">
        <h2>Галерея</h2>
        <p>
          Здесь какое то описание галереи и то для чего она нужна. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Amet dolor sed ipsum delectus molestias dolorum?
        </p>
      </p>
    </div>
  );
}
