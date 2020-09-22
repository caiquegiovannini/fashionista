import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getProducts } from '../../actions/products';
import { fakeApi } from '../../fake_api';

import Catalog from '../../components/Catalog';

import './styles.css';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // fetch(baseURL)
    //   .then(res => res.json())
    //   .then(data => dispatch(getProducts(data)))
    dispatch(getProducts(fakeApi))
  }, [dispatch]);

  return (
    <div className="home">
      <Catalog />
    </div>
  );
}

export default Home;