import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../redux/store';
// import AddLibraryForm from './AddLibraryForm';
import LibraryItem from './LibraryItem';
import HeaderBlockLibrary from './HeaderBlockLibrary';
import './style/Library.css';
import SortItem from './SortItem';
import AddLibraryForm from './AddLibraryForm';
import ThemesPage from './ThemesPage';

const LibraryPage = (): JSX.Element => {
  const materials = useSelector((store: RootState) => store.materials.materials);
  const [flag, setFlag] = useState(false);

  return (
    <div className="container-library">
      <HeaderBlockLibrary />
      <SortItem />
      <ThemesPage />
      <button onClick={() => setFlag(!flag)} type="button">
        Добавить книгу
      </button>
      <div className="container__library">
        {flag && <AddLibraryForm />}
        {materials.map((material) => (
          <LibraryItem key={material.id} material={material} />
        ))}
      </div>
    </div>
  );
};

export default LibraryPage;
