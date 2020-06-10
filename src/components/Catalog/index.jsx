import React from 'react';

import Card from '../Card';

import './styles.css';

const Catalog = ({ products }) => {
  return (
    <main className="catalog container">
      {products &&
        products.map(product => (<Card key={product.sizes[0].sku} product={product} />))
      }
    </main>
  );
}

export default Catalog;