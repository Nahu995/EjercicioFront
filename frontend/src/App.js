import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import SingleProduct from './components/SingleProduct/singleProduct.js'
import ListProducts from './components/ListProducts/listProducts.js'
import Navigation from './components/Navigation/Navigation'
import Page404 from './components/Page404/Page404.js';
import './App.css';

export default class App extends React.Component {

  render() {
    return (
      <Router>
        <Route exact path="/" component={ListProducts} />
        <Route exact path="/navigation" component={Navigation} />
        <Route exact path="/products" component={ListProducts} />
        <Route exact path="/product/:id" component={SingleProduct} />
        <Route exact path="/page404" component={Page404} />

      </Router>
    )
  }
}
