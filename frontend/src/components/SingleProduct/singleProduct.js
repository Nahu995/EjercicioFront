import React from 'react'
import axios from 'axios'
import Page404 from '../Page404/Page404'
import { Redirect, Link } from 'react-router-dom'
import '../../App.css'
export default class SingleProduct extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      product: {},
      error: false
    }
  }

  saveOnLS = (isEnabled) => {
    let productId = this.props.match.params.id
    let status = { id: productId, enabled: isEnabled }
    if (!localStorage.getItem(productId)) {
      localStorage.setItem(productId, JSON.stringify(status))
    }
    if (!JSON.parse(localStorage.getItem(productId)).enabled) {
      console.log("El producto no esta enabled")
      this.setState({ error: true })
    }
    // localStorage.clear()
    console.log("getItem:", localStorage)
  }

  setEnabled = () => {
    let enabled = (Math.round(Math.random())) ? true : false
    console.log("enabled", enabled)
    axios.put(`http://localhost:3700/products/${this.props.match.params.id}`, { enabled: enabled }) 
      .then(response => {
        console.log("responseresponseresponseresponseresponse", response)
        if (response.status === 200) { this.saveOnLS(enabled) }
        else { console.log("hubo un error") }
      })
      .catch(error => {
        console.log("ERROR", error)
      })
  }

  componentDidMount() {
    axios.get(`http://localhost:3700/products/${this.props.match.params.id}`)
      .then(response => {
        console.log(response)
        this.setState({ product: response.data })
        this.setEnabled()
          .then(response =>{
            console.log("sarasasarasasarasa")
          })
      })
      .catch(error => {
        console.log("ERROR", error)
        this.setState({ error: true })
      })
  }

  render() {
    const product = this.state.product
    if (!this.state.error) {
      return (
        (this.state.product) ?
          <div className="card cardStyle">
            <img src="/logo.png" alt={product.description} />
            <div className="card-body">
              <h5 className="card-title">{product.description}</h5>
              <p className="card-text">Precio: {product.price}</p>
              <p className="card-text">Precio de lista: {product.list_price}</p>
              <p className="card-text">Descuento: {product.discount}%</p>
              <Link to="/products" className="btn btn-primary">Volver al menú</Link>
            </div>
          </div> :
          <Page404 />
      )
    } else {
      return <Redirect to="/page404" />
    }
  }
}