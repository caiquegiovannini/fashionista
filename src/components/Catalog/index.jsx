import React from 'react';
import { useSelector } from 'react-redux';

import Card from '../Card';

import Image from '../../assets/image-1.jpg';

import './styles.css';

const Catalog = () => {
  const { products } = useSelector(state => state.products);

  return (
    <div className="container">
      <header className="panel">
        <figure className="panel__image">
          <img src={Image} alt="Imagem do painel"/>
        </figure>
      </header>

      <main className="catalog">
        {products &&
          products.map(product => (<Card key={product.sizes[0].sku} product={product} />))
        }
      </main>
    </div>
  );
}

export default Catalog;