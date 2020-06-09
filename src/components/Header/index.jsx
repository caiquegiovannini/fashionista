import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiShoppingBag } from 'react-icons/fi';

import Cart from '../Cart';

import './styles.css';

const Header = () => {
  const [cartActive, setCartActive] = useState(false);

  function handleClickCart() {
    setCartActive(true);
  }

  function handleCloseCart() {
    setCartActive(false);
  }

  return (
      <>
        <header className="header">
          <div className="header__container">

            <Link to="/">
              <h1 className="header__logo">Fashionista</h1>
            </Link>

            <div>
              <button className="header__button">
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
      </>
  );
}

export default Header;