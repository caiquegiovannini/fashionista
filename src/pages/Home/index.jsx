import React, { useState, useEffect } from 'react';
import { baseURL } from '../../services/api';

import Catalog from '../../components/Catalog';

import './styles.css';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(baseURL)
      .then(res => res.json())
      .then(data => setProducts(data))
  }, []);

  return (
    <div className="home">
      <Catalog products={products} />
    </div>
  );
}

export default Home;