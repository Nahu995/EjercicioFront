import React from 'react'
import axios from 'axios'
import '../../App.css'
import { Link } from 'react-router-dom'

export default class ListProducts extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      productId: "0982a08485",
      selectProduct: {}
    }
  }
  componentDidMount() {
    axios.get("http://localhost:3700/products")
      .then(
        response => {
          this.setState({ products: response.data.items })
          console.log(this.state.products)
        }
      )
      console.log("LOCALSTORAGE",localStorage)
  }
  render() {
    return (
      <div className="container App">
        {this.state.products && this.state.products.map(
          product => (
            <div className="card cardStyle" key={product.id}>
              <Link to={`product/${product.id}`}>
                <img src={(product.id === "83002e672d") ? "//" + product.image_url : product.image_url} className="card-img-top" alt={product.description} />
              </Link>
              <div className="card-body">
                <h5 className="card-title">{product.description}</h5>
                <p className="card-text">Precio: {product.price}</p>
                <p className="card-text">Precio de lista: {product.list_price}</p>
                <p className="card-text">Descuento: {product.discount}%</p>
                <Link to={`product/${product.id}`} className="btn btn-primary">
                  Ver Detalle
                </Link>
              </div>
            </div>
          )
        )}
      </div>
    )
  }
}