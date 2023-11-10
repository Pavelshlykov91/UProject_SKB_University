import React, { useState } from 'react';
import GroupContent from './GroupContent';
import './styles/styles.css';

function GroupItem({ index }: { index: number }): JSX.Element {
  const [flag, setFlag] = useState(false);

  return (
    <div className="groups__container">
      <h2>{`Группа: №${index}`}</h2>
      {!flag && (
        <button onClick={() => setFlag(!flag)} type="button" className="groups-btn">
          &#11166;
        </button>
      )}
      {flag && (
        <>
          <button onClick={() => setFlag(!flag)} type="button" className="groups-btn">
            &#11167;
          </button>
          <GroupContent index={index} />
        </>
      )}
    </div>
  );
}

export default GroupItem;
