import React from 'react';

export default function UpdAlbumForm(): JSX.Element {
  return (
    <form className="form__updalbum">
      <input type="text" placeholder="Название альбома" />
      <input type="text" placeholder="Описание альбома" />
      <input type="text" placeholder="Обложка альбома" />
      <button type="button">Изменить</button>
    </form>
  );
}
