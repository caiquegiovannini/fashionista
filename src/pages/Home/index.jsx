import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { baseURL } from '../../services/api';
import { getProducts } from '../../actions/products';

import Catalog from '../../components/Catalog';

import './styles.css';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(baseURL)
      .then(res => res.json())
      .then(data => dispatch(getProducts(data)))
  }, []);

  return (
    <div className="home">
      <Catalog />
    </div>
  );
}

export default Home;