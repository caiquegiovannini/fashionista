import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiShoppingBag } from 'react-icons/fi';

import Cart from '../Cart';
import Search from '../Search';

import './styles.css';

const Header = () => {
  const [cartActive, setCartActive] = useState(false);
  const [searchActive, setSearchActive] = useState(false);

  function handleClickCart() {
    setCartActive(true);
  }

  function handleClickSearch() {
    setSearchActive(true);
  }

  function handleCloseCart() {
    setCartActive(false);
  }

  function handleCloseSearch() {
    setSearchActive(false);
  }

  return (
      <>
        <header className="header">
          <div className="header__container">

            <Link to="/">
              <h1 className="header__logo">Fashionista</h1>
            </Link>

            <div>
              <button className="header__button" onClick={handleClickSearch}>
                <FiSearch className="header__button-icon" />
              </button>

              <button className="header__button" onClick={handleClickCart}>
                <FiShoppingBag className="header__button-icon" />
                <span className="header__icon__cart-count">0</span>
              </button>
            </div>

          </div>
        </header>

        {cartActive && <Cart close={handleCloseCart}/>}
        {searchActive && <Search close={handleCloseSearch} />}
      </>
  );
}

export default Header;