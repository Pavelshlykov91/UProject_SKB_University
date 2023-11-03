import React from 'react';
// import { Link } from 'react-router-dom';
import HeaderBlock from './HeaderBlock';
import PhotosBlock from './PhotosBlock';

export default function PhotoAlbumsPage(): JSX.Element {
  return (
    <div className="container__album">
      <HeaderBlock />
      <div className="filter-box">
        <label>Сортировка по дате</label>
        <select id="date" name="date">
          <option value="test1">Новые</option>
          <option value="test2">Прошлый месяц</option>
          <option value="test3">Старые</option>
        </select>
        <label>Сортировка по популярности</label>
        <select id="date" name="date">
          <option value="test1">Популярные</option>
          <option value="test2">Не популярное</option>
        </select>
      </div>
      {/* <Link to="/albumsform">Создать альбом</Link> */}
      <PhotosBlock />
    </div>
  );
}
