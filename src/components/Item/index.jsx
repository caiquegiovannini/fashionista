import React from 'react';
import { useDispatch } from 'react-redux';
import { increaseItem, decreaseItem, removeItem } from '../../actions/cart';

import './styles.css';

const Item = ({ item }) => {

  const dispatch = useDispatch();

  const handleIncreaseItem = id => {
    dispatch(increaseItem(id));
  }

  const handleDecreaseItem = id => {
    dispatch(decreaseItem(id));
  }

  const handleRemoveItem = id => {
    dispatch(removeItem(id));
  }

  return (
    <div className="item">
      <section className="item__left">
        <figure className="item__image">
          <img src={item.image} alt={item.name}/>
          <button
            type="button" 
            className="item__remove"
            onClick={() => handleRemoveItem(item.id)}
          >
            Remover item
          </button>
        </figure>
      </section>

      <section className="item__center">
        <h2 className="item__name">{item.name}</h2>

        <p className="item__size">
          Tam.:
          <span className="item__size__value">{` ${item.size}`}</span>
        </p>

        <div className="item__quantity">
          <button
            className="item__quantity-button"
            onClick={() => handleDecreaseItem(item.id)}
          >
            -
          </button>

          <p className="item__quantity-number">{item.quantity}</p>
          
          <button
            className="item__quantity-button"
            onClick={() => handleIncreaseItem(item.id)}
          >
            +
          </button>
        </div>
      </section>

      <section className="item__right">
        <p className="item__price">{item.actual_price}</p>
        <p className="item__payment">{item.installments}</p>
      </section>
    </div>
  );
}

export default Item;