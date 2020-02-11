import React from 'react'
import { Link } from 'react-router-dom'

const Page404 = () => {
  return (
    <div class="jumbotron">
      <h1 class="display-4">404 Page Not Found</h1>
      <p class="lead">El artículo seleccionado o la página elegida no es válida</p>
      <hr class="my-4" />
      <p>Para volver al menú de inicio haz click <Link to="/products">Aquí</Link></p>
    </div>
  )
}
export default Page404