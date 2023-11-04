import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../redux/store';
// import AddLibraryForm from './AddLibraryForm';
import LibraryItem from './LibraryItem';
import HeaderBlockLibrary from './HeaderBlockLibrary'
import './style/Library.css';
import SortItem from './SortItem'

const LibraryPage = (): JSX.Element => {
  const materials = useSelector((store: RootState) => store.materials.materials);

  return (
    <div>
      <HeaderBlockLibrary/>
      <SortItem/>
      {materials.map((material) => (
        <LibraryItem key={material.id} material={material} />
      ))}
    </div>
  );
};

export default LibraryPage;
