import React from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiShoppingBag } from 'react-icons/fi';

import './styles.css';

const Header = () => {
  return (
      <header className="header">

        <Link to="/">
          <h1 className="header__logo">Fashionista</h1>
        </Link>

        <div>
          <button className="header__button">
            <FiSearch className="header__button-icon" />
          </button>

          <button className="header__button">
            <FiShoppingBag className="header__button-icon" />
            <span className="header__icon__cart-count">0</span>
          </button>
        </div>

      </header>
  );
}

export default Header;