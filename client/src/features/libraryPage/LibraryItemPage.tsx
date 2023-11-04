import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from '../../redux/store';

const LibraryItemPage = (): JSX.Element => {
  const { materialId } = useParams();
  const navigate = useNavigate();


  const materials = useSelector((store: RootState) => store.materials.materials);

  const material = materials.find((elem) => materialId && elem.id === +materialId);


  const error = <h1>Такой книги нет</h1>;

  const content = (
    <div className="book-page">
      <img src={material?.url} alt="img" />
      <h2>{material?.author}</h2>
      <p>{material?.content}</p>
      <button type="button" onClick={() => navigate(-1)}>
        Назад в Библиотеку
      </button>
    </div>
  );

  return <div>{!material ? error : content}</div>;
};

export default LibraryItemPage;
