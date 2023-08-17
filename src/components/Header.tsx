import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header>
      <div className="block">
        <Link to="/">
          <div className="block__logo">
            <img src="./assets/home.png" alt="home" />
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
