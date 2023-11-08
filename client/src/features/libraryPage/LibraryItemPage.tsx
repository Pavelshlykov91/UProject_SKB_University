import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from '../../redux/store';
import ModalDeleteLibrary from './modal/ModalDeleteLibrary';
import UpdateLibraryForm from './UpdateLibraryForm';

const LibraryItemPage = (): JSX.Element => {
  const { materialId } = useParams();
  const navigate = useNavigate();

  const [flag, setFlag] = useState(false);
  const [modalActive, setModalActive] = useState(false);

  const materials = useSelector((store: RootState) => store.materials.materials);
  const material = materials.find((elem) => materialId && elem.id === +materialId);
  const user = useSelector((store: RootState) => store.auth.user);

  const error = <h1>Такой книги нет</h1>;

  const content = material && (
    <div className="book-page">
      <div className="book-content">
        <div className="book-img-page">
          {material.url ? (
            <img src={material?.url} alt="img" />
          ) : (
            <img src="../../../public/img/book.jpeg" alt="img" />
          )}
        </div>
        <div className="book-text-page">
          <h2>{material?.author}</h2>
          <p>{material?.content}</p>
        </div>
      </div>
      <div className="book-btn">
        {(user?.id === material?.user_id || user?.role === 'преподаватель') && (
          <div className="library-btns">
            <button onClick={() => setFlag(!flag)} type="button">
              Изменить
            </button>
            {flag && <UpdateLibraryForm flag={flag} setFlag={setFlag} />}
            <button onClick={() => setModalActive(!modalActive)} type="button">
              Удалить
            </button>
            <ModalDeleteLibrary active={modalActive} setActive={setModalActive} id={material.id} />
          </div>
        )}
        <button type="button" onClick={() => navigate(-1)}>
          &#10094; Назад в Библиотеку
        </button>
      </div>
    </div>
  );

  return <div>{!material ? error : content}</div>;
};

export default LibraryItemPage;
