import React from 'react';
import { Link } from 'react-router-dom';

const Join: React.FC = () => {
  return (
    <div className="join-block">
      <div className="join-block__text">
        <img src="./assets/logo.png" alt="logo" />
        <span>Инновации начинаются с твоей идеи!</span>
        <span>Дай нам знать, как ты видишь будущее агротехники</span>
        <Link to="/tell">
          <button>Рассказать о идее</button>
        </Link>
      </div>
      <div className="join-block__image">
        <img src="./assets/nature.jpeg" alt="природа" />
      </div>
    </div>
  );
};

export default Join;
