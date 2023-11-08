/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useAppDispatch } from '../../redux/store';
import { addMaterial } from './reducer/librarySlice';

const AddLibraryForm = (): JSX.Element => {
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [url, setUrl] = useState('');
  const [type, setType] = useState('');
  const [file, setFile] = useState('');

  // const material = useSelector((store: RootState) => store.materials.materials);
  const dispatch = useAppDispatch();

  const onHandleMaterialAdd = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    dispatch(addMaterial({ name, author, content, url }));

    setName('');
    setAuthor('');
    setContent('');
    setUrl('');
    setType('');
    setFile('');
  };
  return (
    <div className="formAdd__container">
      <form onSubmit={onHandleMaterialAdd}>
        <label htmlFor="a">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Название"
          />
        </label>
        <label htmlFor="b">
          <input
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Автор"
            type="text"
          />
        </label>
        <label htmlFor="c">
          <input
            value={content}
            onChange={(e) => setContent(e.target.value)}
            type="text"
            placeholder="Описание"
          />
        </label>
        <label htmlFor="d">
          <input
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            type="text"
            placeholder="Картинка"
          />
        </label>
        <label htmlFor="d">
          <input
            value={type}
            onChange={(e) => setType(e.target.value)}
            type="text"
            placeholder="Тип"
          />
        </label>
        <label htmlFor="d">
          <input
            value={file}
            onChange={(e) => setFile(e.target.value)}
            type="text"
            placeholder="Фаил"
          />
        </label>
        <button type="submit">Добавить</button>
      </form>
    </div>
  );
};

export default AddLibraryForm;
