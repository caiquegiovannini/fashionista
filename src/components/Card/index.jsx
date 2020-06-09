import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const Card = () => {
  return (
    <article className="card">
      <Link to={`/products`}>
        <figure className="card__image">
          <img src="https://viniciusvinna.netlify.app/assets/api-fashionista/20002605_615_catalog_1.jpg" alt=""/>
          <span className="card__discount">-54%</span>
        </figure>

        <div className="card__info">
          <h2 className="card__name">Vestido Transpasse Bow</h2>
          <div className="card__prices">
            <p className="card__old-price">R$ 129,90</p>            
            <p className="card__price">R$ 59,90</p>
          </div>
        </div>
      </Link>
    </article>
  );
}

export default Card;