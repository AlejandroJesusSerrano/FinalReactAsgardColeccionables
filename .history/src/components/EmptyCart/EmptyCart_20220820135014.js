import React from 'react'
import { Link } from 'react-router-dom'

export const EmptyCart = () => {
  return (
    <div className="cartContainer">
        <h2 className="emptyCartDetail">
            El carrito se encuentra vacío, regresar al <Link className="emptyCartLink" to='/'> Home </Link>
        </h2>
    </div>
  )
}

export default EmptyCart
