import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Product from '../pages/Product';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={Home} exact />

      <Route path="/products/:name" component={Product} exact />
    </Switch>
  );
}

export default Routes;