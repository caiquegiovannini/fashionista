import React from 'react';

import './styles.css';

const Item = () => {

  return (
    <div className="item">
      <section className="item__left">
        <figure className="item__image">
          <img src="https://viniciusvinna.netlify.app/assets/api-fashionista/20002605_615_catalog_1.jpg" alt=""/>
          <button type="button" className="item__remove">Remover item</button>
        </figure>
      </section>

      <section className="item__center">
        <h2 className="item__name">Vestido Transpasse Bow</h2>

        <p className="item__size">
          Tam.:
          <span className="item__size__value"> M</span>
        </p>

        <div className="item__quantity">
          <button className="item__quantity-button">-</button>
          <p className="item__quantity-number">1</p>
          <button className="item__quantity-button">+</button>
        </div>
      </section>

      <section className="item__right">
        <p className="item__price">R$ 189,90</p>
        <p className="item__payment">3x R$ 63,30</p>
      </section>
    </div>
  );
}

export default Item;