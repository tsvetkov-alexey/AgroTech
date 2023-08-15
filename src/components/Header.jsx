import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div class="block">
        <Link to="/">
          <div class="block__logo">
            <img src="./assets/home.png" alt="home" />
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
