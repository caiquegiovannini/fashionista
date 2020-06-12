import React from 'react';
import { useSelector } from 'react-redux';

import Card from '../Card';

import './styles.css';

const Catalog = () => {
  const { products } = useSelector(state => state.products);

  return (
    <main className="catalog container">
      {products &&
        products.map(product => (<Card key={product.sizes[0].sku} product={product} />))
      }
    </main>
  );
}

export default Catalog;