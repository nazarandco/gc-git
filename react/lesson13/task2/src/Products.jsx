import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Product from './Product.jsx';

const Products = ({ match }) => {
  return (
    <div class='page__content'>
      <h1>Products</h1>
      <ul class='navigation'>
        <li class='navigation__item'>
          <Link to='/products/ball'>Ball</Link>
        </li>
        <li class='navigation__item'>
          <Link to='/products/book'>Book</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path={match.url}>
          <span>Select a product please</span>
        </Route>
        <Route path={`${match.url}/:productId`}>
          <Product />
        </Route>
      </Switch>
    </div>
  );
};

export default Products;
