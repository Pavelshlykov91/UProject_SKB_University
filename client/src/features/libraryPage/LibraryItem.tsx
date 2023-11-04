import React from 'react';
import { Link } from 'react-router-dom';
import type { Material } from './type';

const LibraryItem = ({ material }: { material: Material }): JSX.Element => {
  return (
    <div className="library-item">
      <h2>{material.name}</h2>
      <h3>{material.author}</h3>
      <img src={material.url} alt="не удалось загрузить" />
      <p>{material.content}</p>
      <button type="button">
        <Link to={`/library/${material.id}`}>Посмотреть книгу</Link>
      </button>
    </div>
  );
};

export default LibraryItem;
