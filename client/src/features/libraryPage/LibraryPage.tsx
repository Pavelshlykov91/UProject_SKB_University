import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../redux/store';
// import AddLibraryForm from './AddLibraryForm';
import LibraryItem from './LibraryItem';
import './style/Library.css';

const LibraryPage = (): JSX.Element => {
  const materials = useSelector((store: RootState) => store.materials.materials);

  return (
    <div>
      {materials.map((material) => (
        <LibraryItem key={material.id} material={material} />
      ))}
    </div>
  );
};

export default LibraryPage;
