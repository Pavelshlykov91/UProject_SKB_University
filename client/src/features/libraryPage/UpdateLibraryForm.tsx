import React, { useState } from 'react';
import  { RootState, useAppDispatch } from '../../redux/store';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { updateMaterial } from './reducer/librarySlice';

function UpdateLibraryForm({
  flag,
  setFlag,
}: {
  flag: boolean;
  setFlag: (active: boolean) => void;
}): JSX.Element {
  const dispatch = useAppDispatch();
  const { materialId } = useParams();

  const materials = useSelector((store: RootState) => store.materials.materials);
  const material = materials.find((elem) => materialId && elem.id === +materialId);

  const [name, setName] = useState(material?.name);
  const [author, setAuthor] = useState(material?.author);
  const [content, setContent] = useState(material?.content);
  const [url, setUrl] = useState(material?.url);

  const onHandleUpdate: React.FormEventHandler<HTMLFormElement> = async (e): Promise<void> => {
    e.preventDefault();
    
    if (name && author && content && url && material) {
      console.log(123123123);
      dispatch(updateMaterial({ id: material.id, name, author, content, url }));
    }
    setFlag(!flag);
  };

  return (
    <form className="form__update" onSubmit={onHandleUpdate}>
      <input value={name} type="text" onChange={(e) => setName(e.target.value)}  placeholder='Название'/>
      <input value={author} type="text" onChange={(e) => setAuthor(e.target.value)} placeholder='Автор'/>
      <input value={content} type="text" onChange={(e) => setContent(e.target.value)} placeholder='Контент'/>
      <input value={url} type="text" onChange={(e) => setUrl(e.target.value)}placeholder='Ссылка' />
      <button type="submit">Изменить</button>
    </form>
  );
}

export default UpdateLibraryForm;
