import React from 'react';
import AddLibraryForm from './AddLibraryForm';
import LibraryItem from './LibraryItem';

const LibraryPage = (): JSX.Element => {
  return (
    <div>
      <AddLibraryForm />
      <LibraryItem />
    </div>
  );
};

export default LibraryPage;
