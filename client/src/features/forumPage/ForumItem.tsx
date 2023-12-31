/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React from 'react';
import { Link } from 'react-router-dom';
import type { Forum } from './type';

const ForumItem = ({ forum }: { forum: Forum }): JSX.Element => {
  return (
    <div>
      <Link to={`/forum/${forum.id}`}>
        <div className="forum-item">
          <div className="forum-item-content">
            <div className="forum-item-text">
              <h3>{forum.title}</h3>
              <h2>{forum.content}</h2>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ForumItem;
