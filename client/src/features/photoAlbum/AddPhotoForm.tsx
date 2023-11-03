import React from 'react';

export default function AddPhotoForm(): JSX.Element {
  return (
    <form className="form__addphoto">
      <input type="text" />
      <input type="text" />
      <button type="button">Добавить альбом</button>
    </form>
  );
}
