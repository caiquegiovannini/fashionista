import React from 'react';
import { useSelector } from 'react-redux';
import { FiArrowLeft } from 'react-icons/fi';

import Item from '../Item';

import './styles.css';

const Cart = ( { close } ) => {
  const { items, itemsInCart, subtotal } = useSelector(state => state.cart);

  return (
    <section className="cart">
      <header className="cart__header">
        <button className="cart__button">
          <FiArrowLeft className="cart__back-button" onClick={() => close()}/>
        </button>
        <p className="cart__qunatity">
          Sacola (
          <span className="quantity__number">
            {itemsInCart}
          </span>
          )
        </p>
      </header>
    
      <main className="cart__content">
        {itemsInCart > 0 
          ? items.map(item => <Item key={item.id} item={item} />)
          : <p className="no-item">Sua sacola está vazia :/</p>
        }
      </main>

      <div className="cart__footer">
        <p className="cart__subtotal">
          Subtotal - R$
          <span className="cart__subtotal__value"> 
            {subtotal}
          </span>
        </p>
      </div>
    </section>
  );
}

export default Cart;