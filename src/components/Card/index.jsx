import React from 'react';
import { Link } from 'react-router-dom';
import { formatNameToParamUrl } from '../../services/utils';

import './styles.css';

const Card = ({ product }) => {
  const param = formatNameToParamUrl(product.name);

  return (
    <article className="card">
      <Link to={`/products/${param}`}>
        <figure className="card__image">
          <img 
            src={product.image
              ? product.image
              : 'https://via.placeholder.com/470x594/FFFFFF/?text=Imagem+Indisponível'
            } 
            alt={product.name}
          />
          {product.discount_percentage &&
            <span className="card__discount">
              -
              {product.discount_percentage}
            </span>
          }
        </figure>

        <div className="card__info">
          <h2 className="card__name">{product.name}</h2>
          <div className="card__prices">
            {product.actual_price !== product.regular_price &&
              <p className="card__old-price">{product.regular_price}</p> 
            }           
            <p className="card__price">{product.actual_price}</p>
          </div>
        </div>
      </Link>
    </article>
  );
}

export default Card;