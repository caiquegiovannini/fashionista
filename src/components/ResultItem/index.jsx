import React from 'react';
import { Link } from 'react-router-dom';
import { formatNameToParamUrl } from '../../services/utils';

import './styles.css';

const ResultItem = ({ item }) => {
  const param = formatNameToParamUrl(item.name);

  return (
    <Link to={`/products/${param}`}>
      <div className="item">
        <section className="item__left">
          <figure className="item__image">
            <img src={item.image} alt={item.name}/>
          </figure>
        </section>

        <section className="item__center">
          <h2 className="item__name">{item.name}</h2>
        </section>

        <section className="item__right">
          <p className="item__price">{item.actual_price}</p>
          <p className="item__payment">{item.installments}</p>
        </section>
      </div>
    </Link>
  );
}

export default ResultItem;