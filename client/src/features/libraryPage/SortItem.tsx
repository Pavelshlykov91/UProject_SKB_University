/* eslint-disable @typescript-eslint/no-unsafe-call */
import React  from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch, type RootState } from '../../redux/store';

import { setMaterials } from './reducer/librarySlice';

const SortItem = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const materials = useSelector((store: RootState) => store.materials.materials);

  const sortAlphabetically = (): void => {
    const sorted = [...materials].sort((a, b) => a.name.localeCompare(b.name));

    dispatch(setMaterials(sorted));
  };

  return (
    <div className="sort-item">
      <select className="sort-select">
        <option className="option-item">Сортировка</option>
        <option onChange={() => sortAlphabetically()} className="option-item">
          По алфавиту
        </option>
      </select>
      <button onClick={sortAlphabetically} type="button">
      Применить
      </button>
    </div>
  );
};

export default SortItem;
