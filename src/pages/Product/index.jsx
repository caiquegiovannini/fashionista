import React from 'react';

import './styles.css';

const Product = () => {
  const sizes = ['P', 'M', 'G'];

  return (
    <main className="product">
      
      <figure className="product__image">
        <img src="https://viniciusvinna.netlify.app/assets/api-fashionista/20002605_615_catalog_1.jpg" alt=""/>
        <span className="product__discount">-54%</span>
      </figure>

      <div className="product__info">
        <h2 className="product__name">Vestido Curto Festival</h2>
        <div className="product__prices">
          <p className="product__old-price">R$ 129,90</p>
          <p className="product__price">R$ 59,90</p>
          <p className="product__payment">em até 1x R$ 59,90</p>
        </div>

        <div className="product__size">
          <p className="product__size__title">Escolha o tamanho</p>
          <div className="product__sizes">
            {sizes.map(size => (
              <div className={`product__sizes__selection ${size === 'M' ? 'product__sizes__selection--active' : ''}`}>{size}</div>
            ))}
          </div>
        </div>

        <button type="button" className="product__button">Adicionar à Sacola</button>
      </div>

    </main>
  );
}

export default Product;