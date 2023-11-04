import React from 'react';
// import { useSelector } from 'react-redux'
import AddLibraryForm from './AddLibraryForm';
import LibraryItem from './LibraryItem';
// import { RootState } from '../../redux/store'
import './style/Library.css'

const LibraryPage = (): JSX.Element => {
// const materials = useSelector((store: RootState)=>store)


  return (
    <div>
      <AddLibraryForm />
      <LibraryItem />
    </div>
  );
};

export default LibraryPage;
