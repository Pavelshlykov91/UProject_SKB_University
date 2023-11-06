import React from 'react';
import { Link } from 'react-router-dom';
import type { Material } from './type';


const LibraryItem = ({ material }: { material: Material }): JSX.Element => {

  return (
    <div className="library-item">
      <img src={material.url} alt="не удалось загрузить" />
      <h2>{material.name}</h2>
      <h3>{material.author}</h3>
      <p>{material.content}</p>
      <button type="button">
        <Link to={`/library/${material.id}`}>Посмотреть книгу</Link>
      </button>
      
     
      
    </div>
  );
};

export default LibraryItem;
