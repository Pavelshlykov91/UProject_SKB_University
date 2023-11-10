/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import '../administration.css';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../redux/store';
import { useAppDispatch } from '../../../redux/store';
import { loadGroups } from '../reducer/GroupSlice';
import GroupItem from './GroupItem';

function GroupPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const groups = useSelector((store: RootState) => store.groups.groups);
  //   const error = useSelector((store: RootState) => store.groups.error);
  //   const loading = useSelector((store: RootState) => store.groups.loading);
  // console.log(groups);

  const groupsUniq = Array.from(new Set(groups.map((el) => el.group_id)));

  useEffect(() => {
    dispatch(loadGroups());
  }, []);

  return (
    <div>
      <div>
        {/* <div className="filterExercise">
          <label htmlFor="select_admin">Задание</label>
          <select id="select_admin" className="select_admin">
            <option value="1">первый</option>
            <option value="2">второй</option>
            <option value="3">третий</option>
          </select>
        </div> */}
      </div>
      <div>
        {groupsUniq.map((elemIndex) => (
          <GroupItem index={elemIndex}/>
        ))}
      </div>
    </div>
  );
}

export default GroupPage;
