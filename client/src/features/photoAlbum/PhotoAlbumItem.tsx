import React from 'react';

export default function PhotoAlbumItem(): JSX.Element {
  return (
    <div className="photoalbum-item">
      <img
        src="https://redpandashop.ru/image/cache/catalog/products/Print/kartina-plachushhij-kot-p53832-1-750x750.jpg"
        alt="img"
      />
      <h2>Заголовок</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum blanditiis fuga,
        consectetur aliquid commodi corporis sunt. Praesentium dignissimos fugit minima fugiat
        saepe, quia excepturi quisquam voluptatum amet libero tenetur et.
      </p>
      <button type="button">Подробнее</button>
    </div>
  );
}
