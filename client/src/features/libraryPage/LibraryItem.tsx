import React  from 'react';
import { Link } from 'react-router-dom';
import type { Material } from './type';

const LibraryItem = ({ material }: { material: Material }): JSX.Element => {


  return (
    <div>
      <Link to={`/library/${material.id}`}>
        <div className="library-item">
          {material.url ? (
            <img src={material.url} alt="не удалось загрузить" />
          ) : (
            <img src="../../../public/img/book.jpeg" alt="img" />
          )}

          <div className="library-item-content">
            <div className="library-item-text">
              <h3>{material.author}</h3>
              <h2>{material.name}</h2>
              {/* <p>{material.content}</p> */}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default LibraryItem;
