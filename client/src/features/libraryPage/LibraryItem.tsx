import React from 'react'

const LibraryItem = ():JSX.Element => {
  return (
    <div>
      <div className="library-item">
      <img
        src="https://img.freepik.com/free-photo/landscape-of-morning-fog-and-mountains-with-hot-air-balloons-at-sunrise_335224-794.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1698883200&semt=sph"
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
    </div>
  )
}

export default LibraryItem