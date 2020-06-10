import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const ResultItem = () => {

  return (
    <Link to="/products">
      <div className="item">
        <section className="item__left">
          <figure className="item__image">
            <img src="https://viniciusvinna.netlify.app/assets/api-fashionista/20002605_615_catalog_1.jpg" alt=""/>
          </figure>
        </section>

        <section className="item__center">
          <h2 className="item__name">Vestido Transpasse Bow</h2>
        </section>

        <section className="item__right">
          <p className="item__price">R$ 189,90</p>
          <p className="item__payment">3x R$ 63,30</p>
        </section>
      </div>
    </Link>
  );
}

export default ResultItem;