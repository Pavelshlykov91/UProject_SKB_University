import React from 'react';
import type { Material } from './type';

const LibraryItem = ({ material }: { material: Material }): JSX.Element => {
  return (
    <div>
      <h2>{material.name}</h2>
      <h3>{material.author}</h3>
      <img src={material.url} alt="не удалось загрузить" />
      <p>{material.content}</p>

    </div>
  );
};

export default LibraryItem;
