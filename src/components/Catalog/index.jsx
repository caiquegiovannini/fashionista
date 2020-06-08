import React from 'react';

import Product from '../Product';

import './styles.css';

const Catalog = () => {
  return (
    <section className="catalog container">
      <Product />
      <Product />
      <Product />
      <Product />

    </section>
  );
}

export default Catalog;