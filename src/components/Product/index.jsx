import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const Product = () => {
  return (
    <article className="card">
      <Link>
        <figure className="card__image">
          <img src="https://viniciusvinna.netlify.app/assets/api-fashionista/20002605_615_catalog_1.jpg" alt=""/>
        </figure>

        <div className="card__info">
          <h2 className="card__name">Vestido Transpasse Bow</h2>
          <p className="card__price">R$ 199,90</p>
        </div>
      </Link>
    </article>
  );
}

export default Product;