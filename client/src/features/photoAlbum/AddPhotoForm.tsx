import React from 'react';

export default function AddPhotoForm(): JSX.Element {
  return (
    <form className="form__addphoto">
      <input type="text" placeholder="Ссылка на фото" />
      <button type="button">Добавить фото</button>
    </form>
  );
}
