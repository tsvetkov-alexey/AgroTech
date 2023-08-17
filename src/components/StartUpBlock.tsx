import React from 'react';
import { Link } from 'react-router-dom';
import { Startups } from '../redux/slices/startup';

const StartUpBlock: React.FC<Startups> = ({ id, title, createdAt, imageUrl }) => {
  return (
    <Link to={`/${id}`}>
      <div className="block-item">
        <div className="block-item__image">
          <img src={imageUrl} alt="preview" />
        </div>
        <div className="block-item__header">
          <span>{title}</span>
        </div>
        <div className="block-item__text">
          <span>Дата создания: {createdAt}</span>
        </div>
      </div>
    </Link>
  );
};

export default StartUpBlock;
