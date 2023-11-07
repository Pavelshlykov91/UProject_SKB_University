import React from 'react';
import { Link } from 'react-router-dom';
import type { Material } from './type';

const LibraryItem = ({ material }: { material: Material }): JSX.Element => {
  return (
    <div className="library-item">
      <img src={material.url} alt="не удалось загрузить" />
      <div className="library-item-content">
        <div className="library-item-text">
          <h2>{material.name}</h2>
          <h3>{material.author}</h3>
          {/* <p>{material.content}</p> */}
        </div>
        <button type="button">
          <Link to={`/library/${material.id}`}>Посмотреть книгу</Link>
        </button>
      </div>
    </div>
  );
};

export default LibraryItem;
