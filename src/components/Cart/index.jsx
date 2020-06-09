import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';

import Item from '../Item';

import './styles.css';

const Cart = ( {close} ) => {
  return (
    <section className="cart">
      <header className="cart__header">
        <button className="cart__button">
          <FiArrowLeft className="cart__back-button" onClick={() => close()}/>
        </button>
        <p className="cart__qunatity">
          Sacola (
          <span className="quantity__number">
            1
          </span>
          )
        </p>
      </header>
    
      <main className="cart__content">
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </main>

      <div className="cart__footer">
        <p className="cart__subtotal">
          Subtotal - R$
          <span className="cart__subtotal__value"> 329,80
          </span>
        </p>
      </div>
    </section>
  );
}

export default Cart;